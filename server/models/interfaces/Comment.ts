import { User } from './User'
import { ObjectId } from 'mongodb'
import { Base } from './Base'

export interface Comment extends Base {
  user: User | ObjectId | string
  comment: string
}
