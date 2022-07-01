import express from 'express';
import { deleteAnyRecipe } from '../controller/adminRecipeController.js';

const router = express.Router();

// Delete any Recipe
router.delete('/:recipeId', deleteAnyRecipe);

export default router;
