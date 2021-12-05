import express from 'express';
import { logger } from '../../logger';
import fs from 'fs';

export const router = express.Router();
const data = JSON.parse(fs.readFileSync('db/jobs.json', 'utf8'));

router.get("", (req, res) => {
    logger.info(`/jobs GET request`);
    res.send(data);
    logger.info(`sent a response`);
});

