import { logger } from '../logger';
import fs from 'fs';
import { Option } from '../types/options';

const options = JSON.parse(fs.readFileSync('db/options.json', 'utf8'));

export const getAllOptions : () => Option[] = () => {
    logger.info(`dal : retrived ${options.length} options`);
    return options;
}

export default { getAllOptions };
