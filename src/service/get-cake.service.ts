import NotFoundError from "../error/not-found.error";
import { CakeModel } from "../model/cake.model";
import { GetCakeResponse } from "../type/response/get-cake.response";

export async function getCake(id: string): Promise<GetCakeResponse> {
  const item = await CakeModel.findById(id)
  if (!item) {
    throw new NotFoundError(`Could not find Cake with id '${id}'`)
  }
  return { item }
}
