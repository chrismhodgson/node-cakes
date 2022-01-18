import { Router, Request, Response } from 'express';
import { handleError } from './common/handle-error';
import { validatePayload } from './common/validate-payload';
import { addCakeSchema } from './schema/add-cake.schema';
import { addCake } from './service/add-cake.service';
import { deleteCake } from './service/delete-cake.service';
import { getCake } from './service/get-cake.service';
import { getCakes } from './service/get-cakes.service';
import cors from 'cors'

export const cakeRouter = Router()

cakeRouter.use(cors({ origin: '*' }));

cakeRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const pageNum = parseInt(String(req.query.page)) || 0
    const pageLimit = parseInt(String(req.query.limit)) || 0
    const items = await getCakes(pageNum, pageLimit);
    res.status(200).json(items)
  } catch (err) {
    handleError(err, res)
  }
});

cakeRouter.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json(await getCake(req.params.id))
  } catch (err) {
    handleError(err, res)
  }
});

cakeRouter.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    validatePayload(req.body, addCakeSchema());
    res.status(200).json(await addCake(req.body))
  } catch (err) {
    handleError(err, res)
  }
});

cakeRouter.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json(await deleteCake(req.params.id))
  } catch (err) {
    handleError(err, res)
  }
});
