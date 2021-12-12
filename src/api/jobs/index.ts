import {Router} from 'express';

import {logger} from '../../logger';
import {getAllJobs} from './get';

export const jobsRouter = Router();

jobsRouter.get('',  getAllJobs);