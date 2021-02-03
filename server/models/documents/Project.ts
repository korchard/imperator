import { Schema, Model, model } from 'mongoose';
import { Project, Category } from '../interfaces';

import { CategoryDB } from './Category';
import mongooseLeanDefaults from 'mongoose-lean-defaults';
import mongooseLeanGetters from 'mongoose-lean-getters';

class ProjectModel extends Model {
  get id(): string {
    return this._id;
  }
}

const ProjectsSchema = new Schema<Project>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    categories: [CategoryDB.schema],
    documents: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Document',
        },
      ],
      default: [],
    },
    insights: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Insight',
        },
      ],
      default: [],
    },
    recommendations: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Recommendation',
        },
      ],
      default: [],
    },
    sample_id: {
      type: String,
      default: false,
    },
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
      default: [],
    },
    customDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
)
  .set('toJSON', { virtuals: true })
  .loadClass(ProjectModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters);

/**
 * Pre middleware
 */
ProjectsSchema.pre('remove', async function () {
  try {
    const Notes = (await import('./Note')).NoteDB;
    const Documents = (await import('./Document')).DocumentDB;
    const Companies = (await import('./Company')).CompanyDB;
    const Insights = (await import('./Insight')).InsightDB;
    const Recommendations = (await import('./Recommendation')).RecommendationDB;

    const project = this.toJSON() as Project;
    const categoryNotes = project.categories.flatMap(
      (category: Category) => category.notes as string[]
    );

    // These have to be document.remove() so we can get pre/post hooks
    const notes = await Notes.find({ _id: { $in: categoryNotes } }).exec();
    for (const note of notes) {
      await note.remove();
    }

    const documents = await Documents.find({ project: this._id }).exec();
    for (const doc of documents) {
      await doc.remove();
    }
    const insights = await Insights.find({ project: this._id }).exec();
    for (const insight of insights) {
      await insight.remove();
    }
    const recommendations = await Recommendations.find({
      project: this._id,
    }).exec();
    for (const recommendation of recommendations) {
      await recommendation.remove();
    }

    // This can be called using Model.update since no hooks need to execute
    await Companies.update(
      { projects: { $elemMatch: { $eq: this._id } } },
      { $pull: { projects: this._id } }
    ).exec();

    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
});

export const ProjectDB = model<Project & ProjectModel>(
  'Project',
  ProjectsSchema
);
