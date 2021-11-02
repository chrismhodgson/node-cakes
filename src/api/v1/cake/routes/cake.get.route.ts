import { Joi } from 'koa-joi-router';
import * as router from 'koa-joi-router';
import { cakeGetHandler } from '../handlers/cake.get.handler';

export const cakeGet: router.Spec = {
  method: 'get',
  path: '/cake',
  handler: cakeGetHandler
};
