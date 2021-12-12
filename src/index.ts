import express from 'express';
import { logger } from './logger';

import { jobsRouter } from './api/jobs';
import { router as manningsRouter } from './routes/mannings';
import { optionsRouter } from './api/options';
import { jobOptionsRouter } from './api/jobOptions';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

logger.info('server started');

const app = express();
app.use(bodyParser.json());

app.use("/jobs", jobsRouter);
app.use("/mannings", manningsRouter);
app.use("/options", optionsRouter);
app.use("/job-options", jobOptionsRouter)
const { HOST, PORT } = process.env;


app.get("/", (req, res) => {
    logger.info("the user has tried the api");
    res.send('hello there');
});



app.use((req, res, next) => {
    res.status(404);

    logger.error(`the user inputed an invalid path. the path: ${req.path}`)
    // default to plain-text. send()
    res.send('Not found');
});

app.listen(PORT, () => {
    logger.info(`server is up and running in ${HOST}:${PORT}`);
});

