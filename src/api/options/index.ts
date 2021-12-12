import {Router} from 'express';

import {logger} from '../../logger';
import {getAllOptions} from './get';

export const optionsRouter = Router();

optionsRouter.get('',  getAllOptions);