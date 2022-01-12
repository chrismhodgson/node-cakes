import { CakeEntity } from '../entity/cake.entity'
export type AddCakeRequest = Omit<CakeEntity, 'id'>;