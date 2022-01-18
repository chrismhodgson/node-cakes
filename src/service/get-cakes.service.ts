import { Model } from "mongoose";
import { CakeModel } from "../model/cake.model";
import { GetCakesResponse } from "../type/response/get-cakes.response";

export async function getCakes(page: number, limit: number): Promise<GetCakesResponse> {
  const pageNumber = Math.max(0, page)
  const pageSize = limit > 0 ? Math.min(25, limit) : 25
  const items = await CakeModel.find().limit(pageSize).skip(pageSize * pageNumber)
  const itemCount = items.length
  const totalItemCount = await getTotalItemCount(CakeModel);
  const totalPages = getTotalPages(totalItemCount, pageSize);

  return { items, meta: { pageNumber, pageSize, itemCount, totalPages, totalItemCount }}
}

async function getTotalItemCount(model: any): Promise<number> {
  return await model.find().count()
}

function getTotalPages(totalItemCount: number, pageSize: number): number {
  return Math.ceil(totalItemCount / pageSize)
}
