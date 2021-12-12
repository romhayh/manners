import fs from 'fs';

import { logger } from '../logger';
import { JobOption } from '../types/jobOptions';

const jobOptions : JobOption[] = JSON.parse(fs.readFileSync('db/jobOptions.json', 'utf8'));

export const getAllJobOptions : () => JobOption[] = () => {
    logger.info(`dal: retriving ${jobOptions.length} job-options`);
    return jobOptions;
} 

export default {getAllJobOptions};