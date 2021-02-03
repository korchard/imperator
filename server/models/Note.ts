import { Schema, Model, model } from 'mongoose';

class NoteModel extends Model {
  get id() {
    return this._id;
  }
}

const NotesSchema = new Schema(
  {
    name: { type: String, required: false, trim: true, default: '' },
    starred: { type: Boolean, default: false },
    attitude: { type: Boolean, default: undefined, required: false },
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
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
    sample_id: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
  .set('toJSON', { virtuals: true })
  .loadClass(NoteModel);

/**
 * Pre middleware
 */
NotesSchema.pre('remove', async function (this: any) {
  try {
    const Projects = (await import('./Project')).ProjectDB;
    const Companies = (await import('./Company')).CompanyDB;
    const Collections = (await import('./Collection')).CollectionDB;
    const Hashtags = (await import('./Hashtag')).HashtagDB;
    const Insights = (await import('./Insight')).InsightDB;

    // Remove documents from all referenced parents
    await Projects.update(
      { 'categories.notes': { $elemMatch: { $eq: this._id } } },
      { $pull: { 'categories.$.notes': this._id } }
    ).exec();
    await Companies.update(
      { notes: { $elemMatch: { $eq: this._id } } },
      { $pull: { notes: this._id } }
    ).exec();
    await Collections.update(
      { notes: { $elemMatch: { $eq: this._id } } },
      { $pull: { notes: this._id } },
      { multi: true }
    ).exec();
    await Hashtags.update(
      { notes: { $elemMatch: { $eq: this._id } } },
      { $pull: { notes: this._id } },
      { multi: true }
    ).exec();
    await Insights.update(
      { notes: { $elemMatch: { $eq: this._id } } },
      { $pull: { notes: this._id } },
      { multi: true }
    ).exec();
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
});

NotesSchema.index({ name: 'text' }); // for matching/sorting (add further $text index in same object)
NotesSchema.index({ name: 1 }); // for secondary sorting
NotesSchema.index({ attitude: 1 }); // for matching
NotesSchema.index({ project: 1 }); // for matching
NotesSchema.index({ createdAt: 1 }); // for sorting
NotesSchema.index({ updatedAt: 1 }); // for sorting

export const NoteDB = model('Note', NotesSchema);
