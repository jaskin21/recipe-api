import mongoose from 'mongoose';
import UserModel from './UserModel.js';

const RecipeSchema = mongoose.Schema({
  recipeName: {
    type: String,
    required: [true, 'Please tell us your name recipe.'],
    max: 255,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: UserModel,
  },
  ingredients: {
    type: Array,
    required: [true, 'You should have your ingredients.'],
  },
  instructions: {
    type: Array,
    required: [true, 'You should have your instructions.'],
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
});

export default mongoose.model('Recipe', RecipeSchema);
