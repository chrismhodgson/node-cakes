import { CakeModel } from "../model/cake.model";
import { AddCakeRequest } from "../type/request/add-cake.request";
import { AddCakeResponse } from "../type/response/add-cake.response";

export async function addCake(payload: AddCakeRequest): Promise<AddCakeResponse> {
  const cake = new CakeModel(payload);
  return cake.save()
}
