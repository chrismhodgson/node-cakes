import { Context } from 'koa';

export async function cakeDeleteHandler(ctx: Context): Promise<void> {
  ctx.body = 'deleted';
}
