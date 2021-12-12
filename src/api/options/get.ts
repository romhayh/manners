import {Request, Response} from 'express';

import {logger} from '../../logger';
import bl from '../../bl';

export const getAllOptions = (req : Request, res : Response) => {
    logger.info(`api: get all options`);
    const options = bl.getAllOptions();
    res.send(options);
};

export default {getAllOptions};