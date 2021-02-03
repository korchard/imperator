import { Hashtag } from './Hashtag'
import { Base } from './Base'

export interface HashtagGroup extends Base {
  name: string
  description: string
  hashtags: Hashtag[]
}
