import Recipe from '../model/RecipeModel.js';
import errorResponseFactory from '../utils/errorResponseFactory.js';
import responseFactory, { responseStatus } from '../utils/responseFactory.js';

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
