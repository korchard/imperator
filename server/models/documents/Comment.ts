import { Schema, Model, model } from 'mongoose'
import { Comment } from '../interfaces'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

export class CommentModel extends Model {
  get id(): string {
    return this._id
  }
}
const CommentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    comment: String,
  },
  { timestamps: true },
)
  .set('toJSON', { virtuals: true })
  .loadClass(CommentModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

export const CommentDB = model<Comment & CommentModel>('Comment', CommentSchema)
