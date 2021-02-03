import { Base } from './Base'
import { User } from './User'
import { Category } from './Category'
import { Insight } from './Insight'
import { Recommendation } from './Recommendation'
import { Document } from './Document'
import { Hashtag } from './Hashtag'
import { Commentable } from './Commentable'

export interface Project extends Base, Commentable {
  name: string
  description: string
  owner: User
  categories: Category[]
  documents: Document[] | string[]
  insights: Insight[] | string[]
  recommendations: Recommendation[] | string[]
  hashtags: Hashtag[] | string[]
  sample_id?: string
  customDate?: Date
}
