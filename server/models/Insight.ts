import { Schema, Model, model } from 'mongoose';
import { SubscriptionNotifier } from './SubscriptionNotifier';

class InsightModel extends Model {
  get id() {
    return this._id;
  }
}
const InsightsSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    notes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Note',
        },
      ],
      default: [],
    },
    hashtags: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Hashtag',
          index: true,
        },
      ],
      default: [],
    },
    documents: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Document',
        },
      ],
      default: [],
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
    sample_id: {
      type: String,
      default: false,
    },
    type: {
      type: String,
      trim: true,
      default: 'none',
      enum: ['design', 'feature', 'product', 'usability', 'none'],
    },
    priority: {
      type: String,
      trim: true,
      default: 'none',
      enum: ['none', 'high', 'medium', 'low'],
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
  },
  {
    timestamps: true,
  }
)
  .set('toJSON', { virtuals: true })
  .loadClass(InsightModel);

/**
 * Pre middleware
 */
InsightsSchema.pre('remove', async function (this: any) {
  try {
    const Companies = (await import('./Company')).CompanyDB;
    const Projects = (await import('./Project')).ProjectDB;
    const Hashtags = (await import('./Hashtag')).HashtagDB;
    const Collections = (await import('./Collection')).CollectionDB;
    const Recommendations = (await import('./Recommendation')).RecommendationDB;

    const insight = this.toJSON();

    // Remove documents from all references
    // await Projects.findByIdAndUpdate(insight.project, {
    //   $pull: { insights: this._id },
    // }).exec()
    await Companies.update(
      { insights: { $elemMatch: { $eq: this._id } } },
      { $pull: { insights: this._id } }
    ).exec();
    await Hashtags.update(
      { insights: { $elemMatch: { $eq: this._id } } },
      { $pull: { insights: this._id } },
      { multi: true }
    ).exec();
    await Collections.update(
      { insights: { $elemMatch: { $eq: this._id } } },
      { $pull: { insights: this._id } },
      { multi: true }
    ).exec();
    await Recommendations.update(
      { insights: { $elemMatch: { $eq: this._id } } },
      { $pull: { insights: this._id } },
      { multi: true }
    ).exec();
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
});

SubscriptionNotifier.decorate(InsightsSchema);

InsightsSchema.index({ name: 'text' }); // for matching/sorting (add further $text index in same object)
InsightsSchema.index({ name: 1 }); // for secondary sorting
InsightsSchema.index({ project: 1 }); // for matching
InsightsSchema.index({ createdAt: 1 }); // for sorting
InsightsSchema.index({ updatedAt: 1 }); // for sorting

export const InsightDB = model('Insight', InsightsSchema);
