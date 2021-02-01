import { Schema, Model, model } from 'mongoose'

class HashtagModel extends Model {
  get id() {
    return this._id
  }
}

const HashtagSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, default: '' },
    notes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Note',
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
    insights: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Insight',
        },
      ],
      default: [],
    },
    hashtagGroups: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'HashtagGroup',
        },
      ],
      default: [],
    },
    collections: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Collection',
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
  },
  {
    timestamps: true,
  },
)
  .set('toJSON', { virtuals: true })
  .loadClass(HashtagModel)

/**
 * Pre middleware
 */
HashtagSchema.pre('remove', async function() {
  try {
    const Companies = (await import('./Company')).CompanyDB
    const Collections = (await import('./Collection')).CollectionDB
    const Documents = (await import('./Document')).DocumentDB
    const Insights = (await import('./Insight')).InsightDB
    const Notes = (await import('./Note')).NoteDB

    // Remove documents from all referenced parents
    const match = { hashtags: { $elemMatch: { $eq: this._id } } }
    const operation = { $pull: { hashtags: this._id } }
    const options = { multi: true }
    await Promise.all([
      Companies.update(match, operation).exec(),
      Collections.update(match, operation, options).exec(),
      Documents.update(match, operation, options).exec(),
      Insights.update(match, operation, options).exec(),
      Notes.update(match, operation, options).exec(),
    ])
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
})
export const HashtagDB = model('Hashtag', HashtagSchema)
