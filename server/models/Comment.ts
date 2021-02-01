import { Schema, Model, model } from 'mongoose'

export class CommentModel extends Model {
  get id() {
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

export const CommentDB = model('Comment', CommentSchema)