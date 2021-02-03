import { Schema } from 'mongoose'

declare module 'mongoose-lean-defaults' {
  export default function(schema: Schema<any>): void
}
