import { Document } from 'mongoose'

export interface Base extends Document {
  uuid?: string // ONLY used for legacy customers
  id: string
  createdAt: number
  updatedAt: number
}
