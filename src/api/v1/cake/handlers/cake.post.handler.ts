import { Context } from 'koa';

export async function cakePostHandler(ctx: Context): Promise<void> {
  ctx.body = 'added';
}
