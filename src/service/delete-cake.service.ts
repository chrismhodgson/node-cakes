import HttpError from "../error/http.error";
import { CakeModel } from "../model/cake.model";

export async function deleteCake(id: string): Promise<void> {
  if (!await CakeModel.findByIdAndRemove(id)) {
    throw new HttpError(`Could not delete Cake with id '${id}'`)
  }
}
