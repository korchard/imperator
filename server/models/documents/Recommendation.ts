import { Schema, Model, model } from 'mongoose'
import { Recommendation } from '../interfaces'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

class RecommendationModel extends Model {
  get id(): string {
    return this._id
  }
}

const RecommendationsSchema = new Schema<Recommendation>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    status: {
      type: String,
      trim: true,
      default: 'not_started',
      enum: ['not_started', 'in_progress', 'completed', 'none'],
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
    type: {
      type: String,
      trim: true,
      default: 'none',
      enum: ['design', 'feature', 'project', 'usability', 'none'],
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
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
      default: [],
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
  },
)
  .set('toJSON', { virtuals: true })
  .loadClass(RecommendationModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

/**
 * Pre middleware
 */
RecommendationsSchema.pre('remove', async function() {
  try {
    const Projects = (await import('./Project')).ProjectDB
    const Hashtags = (await import('./Hashtag')).HashtagDB

    const recommendation = this.toJSON() as Recommendation

    await Projects.findByIdAndUpdate(recommendation.project, {
      $pull: { recommendations: this._id },
    }).exec()
    await Hashtags.update(
      { recommendations: { $elemMatch: { $eq: this._id } } },
      { $pull: { recommendations: this._id } },
      { multi: true },
    ).exec()
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(err)
  }
})

RecommendationsSchema.index({ name: 'text' }) // for matching/sorting (add further $text index in same object)
RecommendationsSchema.index({ name: 1 }) // for secondary sorting
RecommendationsSchema.index({ project: 1 }) // for matching
RecommendationsSchema.index({ createdAt: 1 }) // for sorting
RecommendationsSchema.index({ updatedAt: 1 }) // for sorting

export const RecommendationDB = model<Recommendation & RecommendationModel>(
  'Recommendation',
  RecommendationsSchema,
)
