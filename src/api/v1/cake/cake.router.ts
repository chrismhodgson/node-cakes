import router from 'koa-joi-router';
import { cakeGet } from './routes/cake.get.route';
import { cakePost } from './routes/cake.post.route';
import { cakeDelete } from './routes/cake.delete.route';

export const cakeRouter = router();
cakeRouter.prefix('/api/v1/cake');
const routes = [
  cakeGet,
  cakePost,
  cakeDelete,
];

routes.forEach(route => cakeRouter.route(route));
