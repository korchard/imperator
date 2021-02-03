import { Schema, Model, model } from 'mongoose'
import { HashtagGroup } from '../interfaces'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

class HashtagGroupModel extends Model {
  get id(): string {
    return this._id
  }
}
const HashtagGroupsSchema = new Schema<HashtagGroup>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    hashtags: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Hashtag',
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
  .loadClass(HashtagGroupModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

/**
 * Pre middleware
 */
HashtagGroupsSchema.pre('remove', async function() {
  try {
    const Hashtags = (await import('./Hashtag')).HashtagDB

    // Remove documents from all references
    await Hashtags.update(
      { hashtagGroups: { $elemMatch: { $eq: this._id } } },
      { $pull: { hashtagGroups: this._id } },
      { multi: true },
    ).exec()

    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
})
export const HashtagGroupDB = model<HashtagGroup & HashtagGroupModel>(
  'HashtagGroup',
  HashtagGroupsSchema,
)
