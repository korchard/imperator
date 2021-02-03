import { Schema, Model, model } from 'mongoose'

class CategoryModel extends Model {
  get id() {
    return this._id
  }
}
const CategoriesSchema = new Schema(
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
  
export const CategoryDB = model(
  'Category',
  CategoriesSchema,
)
