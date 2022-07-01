import express from 'express';
import {
  addRecipe,
  listOfRecipes,
  viewRecipe,
} from '../controller/recipeController.js';
import { authUser, authAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// admin dashboard
router.get('/admin', authUser, authAdmin, listOfRecipes);
// user dashboard
router.get('/user', authUser, listOfRecipes);

export default router;
