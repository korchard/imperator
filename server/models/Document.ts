import { Schema, Model, model } from 'mongoose';

class DocumentModel extends Model {
  get id() {
    return this._id;
  }
}

const DocumentsSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    url: { type: String, required: true },
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
      ref: 'Project',
    },
    sample_id: {
      type: String,
      default: false,
    },
    // these props are only used for uploaded docs
    filename: { type: String, required: false },
    description: { type: String, required: false },
    extension: { type: String, required: false },
    fullname: { type: String, required: false },
    thumbnail: { type: String },
    mimetype: { type: String, required: false },
    size: { type: Number, required: false },
    duration: { type: Number, required: false },
    transcription: {
      status: {
        type: String,
        enum: ['queued', 'active', 'error', 'success'],
        required: false,
      },
      raw: { type: String, required: false },
      extractedAudio: { type: String, required: false },
      error: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  }
)
  .set('toJSON', { virtuals: true })
  .loadClass(DocumentModel);

DocumentsSchema.pre('remove', async function (this: any) {
  try {
    const Projects = (await import('./Project')).ProjectDB;
    const Companies = (await import('./Company')).CompanyDB;
    const Collections = (await import('./Collection')).CollectionDB;
    const Hashtags = (await import('./Hashtag')).HashtagDB;
    const Insights = (await import('./Insight')).InsightDB;
    // Remove documents from all referenced parents
    await Companies.update(
      { documents: { $elemMatch: { $eq: this._id } } },
      { $pull: { documents: this._id } }
    ).exec();
    await Projects.update(
      { documents: { $elemMatch: { $eq: this._id } } },
      { $pull: { documents: this._id } }
    ).exec();
    await Collections.update(
      { documents: { $elemMatch: { $eq: this._id } } },
      { $pull: { documents: this._id } },
      { multi: true }
    ).exec();
    await Hashtags.update(
      { documents: { $elemMatch: { $eq: this._id } } },
      { $pull: { documents: this._id } },
      { multi: true }
    ).exec();
    await Insights.update(
      { documents: { $elemMatch: { $eq: this._id } } },
      { $pull: { documents: this._id } },
      { multi: true }
    ).exec();
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
});

DocumentsSchema.index({ name: 'text' }); // for matching/sorting (add further $text index in same object)
DocumentsSchema.index({ name: 1 }); // for secondary sorting
DocumentsSchema.index({ project: 1 }); // for matching
DocumentsSchema.index({ createdAt: 1 }); // for sorting
DocumentsSchema.index({ updatedAt: 1 }); // for sorting

export const DocumentDB = model('Document', DocumentsSchema);
