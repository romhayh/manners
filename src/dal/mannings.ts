import fs from 'fs';
import { isEqual } from 'lodash';

import { logger } from '../logger';
import { Manning } from '../types/mannings';

const MANNIGS_FILE = 'db/mannings.json';

const mannings: Manning[] = JSON.parse(fs.readFileSync(MANNIGS_FILE, 'utf8'));

const updateManningsFile: () => void = () => { 
    fs.writeFileSync(MANNIGS_FILE, JSON.stringify(mannings), 'utf-8') 
}

export const getMannings: (unitId: number, job : string | undefined) => Manning[] = (unitId, job) => {
    logger.info(`dal: get all mannings request of unit ${unitId}`);
    
    const unitMannings = mannings.filter(manning => manning.unitId === unitId) || [];

    if (job){
        return unitMannings.filter(manning => manning.job === job) || [];
    }

    return unitMannings;
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

export const exists : (manningId : number) => boolean = (manningId) => {
    return mannings.some(manning => manning.manningId === manningId);
}


export default { getMannings, insertManning, updateManning, exists };