import { Schema, model } from 'mongoose';

// Mongoose Schema
const PersonSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

export const PersonDB = model('Person', PersonSchema);
