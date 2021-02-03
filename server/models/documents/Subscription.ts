import { Schema, Model, model } from 'mongoose'
import { Subscription } from '../interfaces'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

class SubscriptionModel extends Model {
  get id(): string {
    return this._id
  }
}

const SubscriptionSchema = new Schema<Subscription>(
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
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

export const SubscriptionDB = model<Subscription & SubscriptionModel>(
  'Subscription',
  SubscriptionSchema,
)
