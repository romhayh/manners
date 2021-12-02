import express from 'express';
import {logger} from './logger';
import {router as jobsRouter} from './routes/jobs';
require('dotenv').config(); 

logger.info('server started');

const app = express();
const {HOST, PORT} = process.env;


app.get("/", (req, res) =>{
    res.send('hello there');    
});

app.get("/units/:unitId/mannings", (req, res) => {
    logger.info(`/units/${req.params.unitId}/mannings GET request`);
    res.send(req.params.unitId);
    logger.info(`sent all mannings of the ${req.params.unitId} unit`);
});

app.put("units/:unitId/mannings/:job", (req, res) => {
    logger.info(`/units/${req.params.unitId}/mannings/${req.params.job} PUT request`);
    logger.info(req.body);
    res.send(req.params.unitId);
    logger.info(`sent all mannings of the ${req.params.unitId} unit`);
})

app.use("/jobs", jobsRouter);
app.listen(PORT, () => {
    logger.info(`server is up and running in ${HOST}:${PORT}`);
});