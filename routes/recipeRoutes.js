import express from 'express';
import { addRecipe } from '../controller/recipeController.js';

const router = express.Router();

router.post('/:myId', addRecipe);

export default router;
