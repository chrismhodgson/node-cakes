import { Joi } from 'koa-joi-router';
import * as router from 'koa-joi-router';
import { cakeDeleteHandler } from '../handlers/cake.delete.handler';

export const cakeDelete: router.Spec = {
  method: 'post',
  path: '/cake/:id',
  handler: cakeDeleteHandler
};
