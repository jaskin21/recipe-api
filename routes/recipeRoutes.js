import express from 'express';
import { addRecipe, listOfRecipes } from '../controller/recipeController.js';

const router = express.Router();

router.get('/', listOfRecipes);
// Add your own Recipe
router.post('/:myId', addRecipe);

export default router;
