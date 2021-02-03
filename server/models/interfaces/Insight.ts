import { ObjectId } from 'mongodb'
import { Base } from './Base'
import { Commentable } from './Commentable'
import { Document } from './Document'
import { Note } from './Note'
import { Project } from './Project'
import { Taggable } from './Taggable'

export enum InsightType {
  design = 'design',
  feature = 'feature',
  product = 'product',
  usability = 'usability',
  none = 'none',
}

export interface Insight extends Base, Commentable, Taggable {
  name: string
  description: string
  notes: Note[] | string[] | ObjectId[]
  documents: Document[] | string[] | ObjectId[]
  project: Project
  sample_id?: string
  type: InsightType
  priority: string
}
