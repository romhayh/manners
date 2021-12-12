import {Router} from 'express';

import {logger} from '../../logger';
import bl from '../../bl';

export const jobsRouter = Router();

jobsRouter.get('',  bl.getAllJobs);