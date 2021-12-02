import express from 'express';
import { logger } from '../logger';


export const router = express.Router();

router.get("/units/:unitId", (req, res) => {
    logger.info(`/jobs/units/${req.params.unitId} GET request`);
    res.send(req.params.unitId);
    logger.info(`sent a response`);
});

