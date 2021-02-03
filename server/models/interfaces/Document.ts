import { Base } from './Base'
import { Project } from './Project'
import { Taggable } from './Taggable'

export interface Document extends Base, Taggable {
  name?: string
  url: string
  project: Project
  sample_id?: string
  filename: string
  thumbnail?: string
  description: string
  extension: string
  fullname: string
  mimetype: string
  size: number
  duration?: number
  transcription?: {
    status?: 'queued' | 'active' | 'error' | 'success'
    raw?: string
    extractedAudio?: string
    error?: string
  }
}
