import {Router} from 'express';
import { jobsRouter } from './jobs';
import { optionsRouter } from './options';
import { jobOptionsRouter } from './jobOptions';

export const apiRouter = Router();

apiRouter.use('/jobs', jobsRouter);
apiRouter.use('/options', optionsRouter);
apiRouter.use('/job-options', jobOptionsRouter);


