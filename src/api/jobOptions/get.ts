import {Request, Response} from 'express';

import {logger} from '../../logger';
import bl from '../../bl';

export const getAllJobOptions = (req : Request, res : Response) => {
    logger.info(`api: get all jobs`);
    const jobOptions = bl.getAllJobOptions();
    res.send(jobOptions);
};

export default {getAllJobOptions};