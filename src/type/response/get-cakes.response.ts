import { CakeEntity } from '../entity/cake.entity'
export type GetCakesResponse = {
  items: CakeEntity[],
  meta: {
    pageNumber: number,
    pageSize: number,
    itemCount: number,
    totalItemCount: number,
    totalPages: number
  }
}