import {Router} from 'express';
import { jobsRouter } from './jobs';

export const apiRouter = Router();
apiRouter.use(jobsRouter);

