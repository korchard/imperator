import { ObjectId } from 'mongodb'
import { Comment } from './Comment'

export interface Commentable {
  comments: Comment[] | string[] | ObjectId[]
}
