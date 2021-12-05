import express from 'express';
import { logger } from '../../logger';

export const router = express.Router();

router.get("", (req, res) => {
    logger.info("/roles GET request");
    res.send("you got the roles");
    logger.info("sent all available roles");
})