import { Joi } from 'koa-joi-router';
import * as router from 'koa-joi-router';
import { cakePostHandler } from '../handlers/cake.post.handler';

export const cakePost: router.Spec = {
  method: 'post',
  path: '/cake',
  handler: cakePostHandler,
  validate: {
    body: {
      name: Joi.string().trim().max(50).required(),
      imageUrl: Joi.string().trim().uri().required(),
      comments: Joi.string().trim().max(200).required(),
      yumFactor: Joi.number().integer().min(1).max(5).required()
    },
    type: 'json'
  }
};
