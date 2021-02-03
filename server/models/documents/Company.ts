import { Schema, Model, model } from 'mongoose'
import { Company } from '../interfaces'
import { ProjectDB } from './Project'
import { CollectionDB } from './Collection'
import { RecommendationDB } from './Recommendation'
import { HashtagGroupDB } from './HashtagGroup'
import { HashtagDB } from './Hashtag'
import { NoteDB } from './Note'
import { InsightDB } from './Insight'
import { DocumentDB } from './Document'
import { UserDB } from './User'
import mongooseLeanDefaults from 'mongoose-lean-defaults'
import mongooseLeanGetters from 'mongoose-lean-getters'

class CompanyModel extends Model {
  get id(): string {
    return this._id
  }
  isLocked(): boolean {
    return this.activeUntil.getTime() <= Date.now()
  }
}

const CompaniesSchema = new Schema<Company>(
  {
    name: { type: String, required: true, trim: true },
    projects: {
      type: [{ type: Schema.Types.ObjectId, ref: ProjectDB.modelName }],
      default: [],
    },
    collections: {
      type: [{ type: Schema.Types.ObjectId, ref: CollectionDB.modelName }],
      default: [],
    },
    recommendations: {
      type: [{ type: Schema.Types.ObjectId, ref: RecommendationDB.modelName }],
      default: [],
    },
    hashtagGroups: {
      type: [{ type: Schema.Types.ObjectId, ref: HashtagGroupDB.modelName }],
      default: [],
    },
    hashtags: {
      type: [{ type: Schema.Types.ObjectId, ref: HashtagDB.modelName }],
      default: [],
    },
    notes: {
      type: [{ type: Schema.Types.ObjectId, ref: NoteDB.modelName }],
      default: [],
    },
    insights: {
      type: [{ type: Schema.Types.ObjectId, ref: InsightDB.modelName }],
      default: [],
    },
    documents: {
      type: [{ type: Schema.Types.ObjectId, ref: DocumentDB.modelName }],
      default: [],
    },
    admins: {
      type: [{ type: Schema.Types.ObjectId, ref: UserDB.modelName }],
      default: [],
    },
    teamMembers: {
      type: [{ type: Schema.Types.ObjectId, ref: UserDB.modelName }],
      default: [],
    },
    readOnly: {
      type: [{ type: Schema.Types.ObjectId, ref: UserDB.modelName }],
      default: [],
    },
    billing: {
      brand: String,
      customerId: String,
      event: String,
      expMonth: Number,
      expYear: Number,
      last4: String,
      plan: String,
      quantity: Number,
      sourceId: String,
      status: String,
      subscriptionId: String,
      trialStart: Number,
      trialEnd: Number,
      default: {},
    },
    saml: {
      sso_login_url: String,
      sso_logout_url: String,
      certificates: { type: [String], default: [] },
      ssoOnly: { type: Boolean, default: false },
      default: {},
    },
    activeUntil: {
      type: Date,
      default: Date.now,
    },
    acceptedCustomerTOS: { type: Boolean, required: true, default: false },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
      default: {},
    },
    jira: {
      domain: String,
      email: String,
      api_token: String,
      default: {},
    },
    zapier: {
      api_key: String,
      hooks: {
        insights: String,
        default: {},
      },
      default: {},
    },
    ipWhitelist: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
)
  .set('toJSON', { virtuals: true })
  .loadClass(CompanyModel)
  .plugin(mongooseLeanDefaults)
  .plugin(mongooseLeanGetters)

/**
 * Methods
 */
CompaniesSchema.methods.jiraConfigured = function(): boolean {
  const hasJira =
    this.jira && this.jira.domain && this.jira.email && this.jira.api_token
  return !!hasJira
}

export const CompanyDB = model<Company & CompanyModel>(
  'Company',
  CompaniesSchema,
)
