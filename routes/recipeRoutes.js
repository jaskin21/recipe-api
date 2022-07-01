import express from 'express';
import {
  addRecipe,
  listOfRecipes,
  viewRecipe,
} from '../controller/recipeController.js';
import { authUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all Recipes
router.get('/', authUser, listOfRecipes);
// view specific Recipe
router.get('/:recipeId', authUser, viewRecipe);
// Add your own Recipe
router.post('/:myId', authUser, addRecipe);

export default router;
