import * as Joi from 'joi';

export const addCakeSchema = (): Joi.Schema => (Joi.object({
  name: Joi.string().trim().max(50).required(),
  imageUrl: Joi.string().trim().uri().required(),
  comments: Joi.string().trim().max(200).required(),
  yumFactor: Joi.number().integer().min(1).max(5).required()
}));
