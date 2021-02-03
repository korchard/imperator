import { ObjectId } from 'mongodb'
import { Hashtag } from './Hashtag'

export interface Taggable {
  hashtags: Hashtag[] | string[] | ObjectId[]
}
