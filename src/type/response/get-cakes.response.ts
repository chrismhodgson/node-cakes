import { CakeEntity } from '../entity/cake.entity'
export type GetCakesResponse = {
  items: CakeEntity[],
  meta: {
    page: number,
    limit: number
  }
}