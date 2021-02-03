import { User } from './User'
import { Base } from './Base'
import { Project } from './Project'
import { Collection } from './Collection'
import { Recommendation } from './Recommendation'
import { Hashtag } from './Hashtag'
import { HashtagGroup } from './HashtagGroup'
import { Note } from './Note'
import { Insight } from './Insight'
import { Document } from './Document'
import { ObjectId } from 'mongodb'

export interface Company extends Base {
  name: string
  projects: Project[] | ObjectId[]
  collections: Collection[] | ObjectId[]
  recommendations: Recommendation[] | ObjectId[]
  hashtagGroups: HashtagGroup[] | ObjectId[]
  hashtags: Hashtag[] | ObjectId[]
  notes: Note[] | ObjectId[]
  insights: Insight[] | ObjectId[]
  documents: Document[] | ObjectId[]
  htgroup?: HashtagGroup
  admins: User[] | ObjectId[]
  teamMembers: User[] | ObjectId[]
  readOnly: User[] | ObjectId[]
  billing: {
    brand: string
    customerId: string
    event?: string
    expMonth: number
    expYear: number
    last4: string
    plan: string
    quantity?: number
    sourceId: string
    status: string
    subscriptionId?: string
    trialStart?: number
    trialEnd?: number
  }
  saml: {
    sso_login_url: string
    sso_logout_url: string
    certificates: string[]
    ssoOnly: boolean
  }
  activeUntil: Date
  acceptedCustomerTOS: boolean
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  jira: {
    domain: string
    email: string
    api_token: string
  }
  zapier: {
    api_key?: string
    hooks: {
      insights?: string
    }
  }
  ipWhitelist: string[]
  jiraConfigured: () => boolean
}
