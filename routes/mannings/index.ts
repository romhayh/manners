import express from 'express';
import { logger } from '../../logger';

export const router = express.Router();

router.get("/units/:unitId", (req, res) => {
    logger.info(`/mannings/units/${req.params.unitId} GET request`);
    res.send(req.params.unitId);
    logger.info(`sent all mannings of the ${req.params.unitId} unit`);
});

router.get("/:job/units/:unitId", (req, res) => {
    logger.info(`/mannings/${req.params.job}/units/${req.params.unitId} GET request`);
    res.send({ unitId: req.params.unitId, job: req.params.job });
    logger.info(`sent the manning of the ${req.params.job} job for the ${req.params.unitId} unit`);
});

router.put("/:manningId", (req, res) => {
    logger.info(`/mannings/${req.params.manningId} PUT request`);
    logger.info(req.body);
    res.send(req.params.manningId);
})
