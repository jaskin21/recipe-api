import express from 'express';
import {
  createAdmin,
  deleteAnyRecipe,
  listOfUsers,
  updateRecipe,
} from '../controller/adminRecipeController.js';
import { authAdmin, authUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// view all users
router.get('/users', authUser, authAdmin, listOfUsers);
// Edit any Recipe
router.patch('/update/:recipeId', authUser, authAdmin, updateRecipe);
// Delete any Recipe
router.delete('/delete/:recipeId', authUser, authAdmin, deleteAnyRecipe);
// Create Admin
router.post('/createAdmin', authUser, authAdmin, createAdmin);

export default router;
