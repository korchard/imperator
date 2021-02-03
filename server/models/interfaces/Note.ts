import { Base } from './Base'
import { Category } from './Category'
import { Project } from './Project'
import { Taggable } from './Taggable'

export interface Note extends Base, Taggable {
  name: string | undefined
  starred: boolean
  attitude?: boolean
  project: Project
  sample_id?: string
  category?: Category
}
