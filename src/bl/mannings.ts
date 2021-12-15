import dal from '../dal';
import { Manning } from '../types/mannings';

export const getAllMannings : (unitId : number) => Manning[] = (unitId) => {
    return dal.getAllMannings(unitId);
}

export default {getAllMannings};