import { Schema, Model, model } from 'mongoose'
import { Category } from '../interfaces'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

class CategoryModel extends Model {
  get id(): string {
    return this._id
  }
}
const CategoriesSchema = new Schema<Category>(
  {
    name: { type: String, required: false, trim: true },
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
  .loadClass(CategoryModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

export const CategoryDB = model<Category & CategoryModel>(
  'Category',
  CategoriesSchema,
)
