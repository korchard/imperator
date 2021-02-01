import { Schema, Model, model } from 'mongoose'

class SubscriptionModel extends Model {
  get id() {
    return this._id
  }
}

const SubscriptionSchema = new Schema(
  {
    target: String,
    type: String, //event type
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
  },
  {
    timestamps: true,
  },
)
  .set('toJSON', { virtuals: true })
  .loadClass(SubscriptionModel)

export const SubscriptionDB = model(
  'Subscription',
  SubscriptionSchema,
)
