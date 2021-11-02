import Koa from 'koa';
import json from 'koa-json';
import { cakeRouter } from './api/v1/cake/cake.router';

const app = new Koa();
app.use(cakeRouter.middleware());
app.use(json());

const port = 3001
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
