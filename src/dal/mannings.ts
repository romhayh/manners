import fs from 'fs';
import { isEqual } from 'lodash';

import { logger } from '../logger';
import { Manning } from '../types/mannings';

const MANNIGS_FILE = 'db/mannings.json';

const mannings: Manning[] = JSON.parse(fs.readFileSync(MANNIGS_FILE, 'utf8'));

const updateManningsFile: () => void = () => { 
    fs.writeFileSync(MANNIGS_FILE, JSON.stringify(mannings), 'utf-8') 
}

export const getAllMannings: (unitId: number) => Manning[] = (unitId) => {
    logger.info(`dal: get all mannings request of unit ${unitId}`);
    logger.info(`dal: retrived ${mannings.length} mannings`);
    return mannings;
};

export const insertManning: (manning: Manning) => void = (manning) => {
    logger.info(`dal: insert a new manning`);
    mannings.push(manning);
    updateManningsFile();
}

export const updateManning: (manning: Manning) => void = (manning) => {
    logger.info(`dal: update an existing manning`);

    const updatedManningIndex = mannings.findIndex(
        currentManning => currentManning.manningId === manning.manningId
    );

    mannings[updatedManningIndex] = manning;
    updateManningsFile();
}

export default { getAllMannings, insertManning, updateManning };