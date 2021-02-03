import { Collection } from './Collection'
import { Note } from './Note'
import { Insight } from './Insight'
import { HashtagGroup } from './HashtagGroup'
import { Recommendation } from './Recommendation'
import { Document } from './Document'
import { Base } from './Base'
import { ObjectId } from 'mongodb'

export interface Hashtag extends Base {
  name: string
  description: string
  notes: Note[] | string[] | ObjectId[]
  documents: Document[] | string[] | ObjectId[]
  insights: Insight[] | string[] | ObjectId[]
  hashtagGroups: HashtagGroup[] | string[] | ObjectId[]
  collections: Collection[] | string[] | ObjectId[]
  recommendations: Recommendation[] | string[] | ObjectId[]
  sample_id?: string
}
