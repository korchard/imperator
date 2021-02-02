import { Schema, Model, model } from 'mongoose'

class CollectionModel extends Model {
  get id() {
    return this._id
  }
}

const CollectionsSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
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
    insights: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Insight',
        },
      ],
      default: [],
    },
    sample_id: {
      type: String,
      default: false,
    },
    sharedWith: {
      type: [String],
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
  },
)
  .set('toJSON', { virtuals: true })
  .loadClass(CollectionModel)

/**
 * Pre middleware
 */
CollectionsSchema.pre('remove', async function() {
  try {
    const Hashtag = (await import('./Hashtag')).HashtagDB
    await Hashtag.update(
      { collections: { $elemMatch: { $eq: this._id } } },
      { $pull: { collections: this._id } },
      { multi: true },
    ).exec()
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
})

CollectionsSchema.index({ name: 'text' }) // for matching/sorting (add further $text index in same object)
CollectionsSchema.index({ name: 1 }) // for secondary sorting
CollectionsSchema.index({ createdAt: 1 }) // for sorting
CollectionsSchema.index({ updatedAt: 1 }) // for sorting

export const CollectionDB = model(
  'Collection',
  CollectionsSchema,
)
