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



app.use("/jobs", jobsRouter);
app.listen(PORT, () => {
    console.log(`server is up and running in ${HOST}:${PORT}`);
    logger.info(`server is up and running in ${HOST}:${PORT}`);
});