import express from 'express';

export const router = express.Router();

router.get("/units/:unitId/jobs", (req, res) => {
    res.send(req.params.unitId);
});