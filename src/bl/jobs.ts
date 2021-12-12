import { Response, Request, NextFunction} from 'express';

import {logger} from '../logger';
import dal from '../dal/jobs';

export const getAllJobs = () => {
    logger.info(`bl: get all jobs`);
    
    return dal.getAllJobs();
};

export default {getAllJobs};
