import fs from 'fs';

import {logger} from '../logger';

const jobs = JSON.parse(fs.readFileSync('db/jobs.json', 'utf8'));

export const getAllJobs = () => {
    logger.info(`dal: get all jobs request`);
    logger.info(`dal: retrived ${jobs.length} jobs`);
    return jobs;
};