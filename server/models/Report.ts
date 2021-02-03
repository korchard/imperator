import { Schema, Model, model } from 'mongoose'

class ReportModel extends Model {
  get id() {
    return this._id
  }
}
const ReportsSchema = new Schema(
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

export const ReportDB = model('Report', ReportsSchema)
