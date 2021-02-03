import { ObjectId } from 'mongodb'
import { Base } from './Base'
import { Commentable } from './Commentable'
import { Insight } from './Insight'
import { Taggable } from './Taggable'

export interface Recommendation extends Base, Commentable, Taggable {
  name: string
  description: string
  project: string
  status: string
  type: string
  insights: Insight[] | string[] | ObjectId[]
}
