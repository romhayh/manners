import express from 'express';
import fs from 'fs';
import { logger } from '../../logger';

export const router = express.Router();
const data = JSON.parse(fs.readFileSync('db/jobOptions.json', 'utf8'));

router.get("", (req, res) => {
    logger.info("/job-options GET request");
    res.send(data);
    logger.info("sent all options for all the jobs");
})