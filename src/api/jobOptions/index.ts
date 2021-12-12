import {Router} from 'express';

import {logger} from '../../logger';
import {getAllJobOptions} from './get';

export const jobOptionsRouter = Router();

jobOptionsRouter.get('',  getAllJobOptions);