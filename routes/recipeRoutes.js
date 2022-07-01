import express from 'express';
import {
  addRecipe,
  listOfRecipes,
  viewRecipe,
} from '../controller/recipeController.js';

const router = express.Router();

// Get all Recipes
router.get('/', listOfRecipes);
// view specific Recipe
router.get('/:recipeId', viewRecipe);
// Add your own Recipe
router.post('/:myId', addRecipe);

export default router;
