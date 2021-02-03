import { Company } from './Company'
import { Base } from './Base'

export interface User extends Base {
  name: string
  email: string
  confirmed: boolean
  password: string
  loginAttempts: number
  lockUntil: Date
  resetPasswordToken?: string
  resetPasswordExpires: Date
  lastSignIn: Date
  lastAttemptedSignIn: Date
  role?: string
  firstname?: string
  lastname?: string
  verify: string
  acceptedUserTOS: boolean
  company: Company | string
  sessionId?: string
  tips: {
    projectList: boolean
    projectOverview: boolean
    projectNotes: boolean
    projectTags: boolean
    projectKeyInsights: boolean
    projectRecommendations: boolean
    projectReports: boolean
    allTags: boolean
    collections: boolean
    search: boolean
  }
  saml: {
    nameId?: string
    sessionIndex?: string
    requestId?: string
  }
}
