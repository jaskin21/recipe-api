import express from 'express';
import {
  deleteAnyRecipe,
  listOfUsers,
  updateRecipe,
} from '../controller/adminRecipeController.js';

const router = express.Router();

// view all users
router.get('/users', listOfUsers);
// Edit any Recipe
router.patch('/update/:recipeId', updateRecipe);
// Delete any Recipe
router.delete('/delete/:recipeId', deleteAnyRecipe);

export default router;
