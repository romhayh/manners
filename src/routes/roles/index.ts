import express from 'express';
import { logger } from '../../logger';
import fs from 'fs';

export const router = express.Router();
const data = JSON.parse(fs.readFileSync('db/roles.json', 'utf8'));

router.get("", (req, res) => {
    logger.info("/roles GET request");
    res.send(data);
    logger.info("sent all available roles");
})