import { Base } from './Base'
import { Project } from './Project'

export interface Report extends Base {
  project: Project | string
  reportData: string
  sharedWith?: string[]
  removedKeyInsights: string[]
  removedRecommendations: string[]
  insertedKeyInsights: { [key: string]: string }
  insertedRecommendations: { [key: string]: string }
  key?: string
}
