import mongoose from 'mongoose';
import { authorSchema } from './Author.js';

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, 'The title of the book is required']},
  author: authorSchema,
  src: {
    type: String, required:[true,'The source of the image, is required.']
  },
  price: { type: Number},
  publisher: { type: String },
  pages: { type: Number, 
    validate: {
      validator: (value)=> {
      return value >= 10 && value <= 5000;
          }, 
        message: "The number of pages must be between 10 and 5000. Value provided: {VALUE}."
      } 
  },
  
  createdAt: { 
    type: Date, default: Date.now 
  }

}, { versionKey: false });

const book =  mongoose.model('book', bookSchema);
export default book;