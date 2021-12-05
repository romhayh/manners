import express from 'express';
import { logger } from '../../logger';

export const router = express.Router();

router.get("", (req, res) => {
    logger.info("/job-options GET request");
    res.send("you got the options for all the jobs");
    logger.info("sent all options for all the jobs");
})