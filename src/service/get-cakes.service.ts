import { CakeModel } from "../model/cake.model";
import { GetCakesResponse } from "../type/response/get-cakes.response";

export async function getCakes(page: number, limit: number): Promise<GetCakesResponse> {
  const pageNum = Math.max(0, page)
  const items = await CakeModel.find().limit(limit).skip(limit * pageNum)
  return { items, meta: { page: pageNum, limit: limit } }
}
