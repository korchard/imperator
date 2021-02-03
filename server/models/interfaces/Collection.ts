import { ObjectId } from 'mongodb'
import { Base } from './Base'
import { Commentable } from './Commentable'
import { Document } from './Document'
import { Insight } from './Insight'
import { Note } from './Note'
import { Recommendation } from './Recommendation'
import { Taggable } from './Taggable'
import { User } from './User'

export interface Collection extends Base, Commentable, Taggable {
  name: string
  description: string
  owner: User
  notes: Note[]
  documents: Document[] | string[] | ObjectId[]
  insights: Insight[] | string[] | ObjectId[]
  sample_id?: string
  sharedWith: string[]
  recommendations: Recommendation[] | string[] | ObjectId[]
  key?: string
}
