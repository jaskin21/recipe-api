import Joi from 'joi';

//Create Recipe input validation
export const recipeValidation = (data) => {
  const schema = Joi.object({
    recipeName: Joi.string().required().max(255),
    author: Joi.string(),
    ingredients: Joi.array().required(),
    instructions: Joi.array().required(),
  });
  console.log('Create Recipe input validated');
  return schema.validate(data);
};
