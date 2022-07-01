import Recipe from '../model/RecipeModel.js';
import errorResponseFactory from '../utils/errorResponseFactory.js';
import responseFactory, { responseStatus } from '../utils/responseFactory.js';
import { recipeValidation } from '../validation/recipeValidation.js';

// get all recipes
export const listOfRecipes = async (req, res) => {
  try {
    const items = await Recipe
      .find
      // { respondent: req.user.id,}
      ()
      .sort({
        date: -1,
      });

    return responseFactory(res, 200, { items });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};

// get all recipes
export const viewRecipe = async (req, res) => {
  try {
    const viewItems = await Recipe.find({ _id: req.params.recipeId });

    return responseFactory(res, 200, { viewItems });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};

// create user personal Recipe
export const addRecipe = async (req, res) => {
  //VALIDATE THE DATA BEFORE USER
  const { error } = recipeValidation(req.body);
  if (error) {
    return errorResponseFactory(
      res,
      responseStatus.BAD_REQUEST,
      error.details[0].message,
      {
        details: error.details,
      }
    );
  }

  const question = new Recipe({
    ...req.body,
    author: req.params.myId,
  });
  try {
    const saveQuestion = await question.save();

    return responseFactory(res, 200, { question: saveQuestion });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};
