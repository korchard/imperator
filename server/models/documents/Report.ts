import { Schema, Model, model } from 'mongoose'
import { Report } from '../interfaces'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

class ReportModel extends Model {
  get id(): string {
    return this._id
  }
}
const ReportsSchema = new Schema<Report>(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
    reportData: String,
    sharedWith: [String],
    removedKeyInsights: [String],
    removedRecommendations: [String],
    insertedKeyInsights: Object,
    insertedRecommendations: Object,
  },
  {
    timestamps: true,
  },
)
  .set('toJSON', { virtuals: true })
  .loadClass(ReportModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

export const ReportDB = model<Report & ReportModel>('Report', ReportsSchema)
