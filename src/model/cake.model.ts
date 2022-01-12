import mongoose from 'mongoose'

const CakeSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  comments: String,
  yumFactor: { type: Number, min: 1, max: 5 }
})

export const CakeModel = mongoose.model('cake', CakeSchema);
