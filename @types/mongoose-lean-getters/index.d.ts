import { Schema } from 'mongoose'

declare module 'mongoose-lean-getters' {
  export default function(schema: Schema<any>): void
}
