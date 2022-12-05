import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    score: { type: Number, required: true }
})

export const User = model('User', userSchema);