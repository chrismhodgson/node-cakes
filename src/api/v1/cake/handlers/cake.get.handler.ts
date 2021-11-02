import { Context } from 'koa';

export async function cakeGetHandler(ctx: Context): Promise<void> {
  ctx.body = 'results';
}
