import {Request, Response} from 'express';

import {logger} from '../../logger';
import bl from '../../bl';

export const getAllJobs = (req : Request, res : Response) => {
    logger.info(`api: get all jobs`);
    const jobs = bl.getAllJobs();
    res.send(jobs);
};

export default {getAllJobs};