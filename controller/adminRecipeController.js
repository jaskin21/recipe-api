import Recipe from '../model/RecipeModel.js';
import User from '../model/UserModel.js';
import errorResponseFactory from '../utils/errorResponseFactory.js';
import responseFactory, { responseStatus } from '../utils/responseFactory.js';
import { registerValidation } from '../validation/userValidation.js';

// delete any recipe; requirement must be admin
export const updateRecipe = async (req, res) => {
  try {
    const updatedItem = await Recipe.findOneAndUpdate(
      {
        _id: req.params.recipeId,
      },
      {
        $set: {
          recipeName: req.body.recipeName,
          author: req.body.author,
          ingredients: req.body.ingredients,
          instructions: req.body.instructions,
        },
      }
    );
    return responseFactory(res, 200, { updatedItem });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};

// delete any recipe; requirement must be admin
export const deleteAnyRecipe = async (req, res) => {
  try {
    const viewItems = await Recipe.findByIdAndRemove({
      _id: req.params.recipeId,
    });
    return responseFactory(res, 200, { viewItems });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};

// register a user
export const createAdmin = async (req, res) => {
  // Validate the data before user
  const { error } = registerValidation(req.body);
  if (error) {
    return errorResponseFactory(res, 400, error.details[0].message, {
      details: error.details,
    });
  }
  // Chesking if email is unique
  const emailExist = await User.findOne({ email: req.body.email }).exec();
  if (emailExist) {
    return errorResponseFactory(res, 400, 'Email already exists');
  }

  // Chesking if email is unique
  const userName = await User.findOne({ username: req.body.username }).exec();
  if (userName) {
    return errorResponseFactory(res, 400, 'Username already exists');
  }

  // Create a new user
  const userDetails = new User(req.body);

  try {
    await userDetails.save();

    return responseFactory(res, 201, { message: 'Successfully registered' });
  } catch (err) {
    return errorResponseFactory(
      res,
      400,
      err?.message ?? 'Something went wrong, please try again'
    );
  }
};

// get all recipes
export const listOfUsers = async (req, res) => {
  try {
    const items = await User.find();

    return responseFactory(res, 200, { items });
  } catch (error) {
    return errorResponseFactory(
      res,
      400,
      error?.message ?? 'Something went wrong, please try again'
    );
  }
};
