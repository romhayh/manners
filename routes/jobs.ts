import express from 'express';
import { logger } from '../logger';


export const router = express.Router();

router.get("", (req, res) => {
    logger.info(`/jobs GET request`);
    res.send('jobs');
    logger.info(`sent a response`);
});

