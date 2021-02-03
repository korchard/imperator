import { Note } from './Note'
import { Document } from './Document'
import { Base } from './Base'

export interface Category extends Base {
  name?: string
  notes: Note[] | string[]
  documents: Document[] | string[]
  sample_id?: string
}
