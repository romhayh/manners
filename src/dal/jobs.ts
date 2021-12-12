import fs from 'fs';

import {logger} from '../logger';
import { Job } from '../types/jobs';

const jobs = JSON.parse(fs.readFileSync('db/jobs.json', 'utf8'));

export const getAllJobs : () => Job[] = () => {
    logger.info(`dal: get all jobs request`);
    logger.info(`dal: retrived ${jobs.length} jobs`);
    return jobs;
};

export default {getAllJobs};