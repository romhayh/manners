import mannings from '../dal/mannings';
import { Manning } from '../types/mannings';

export const getAllMannings: (unitId: number) => Manning[] = (unitId) => {
    return mannings.getAllMannings(unitId);
}

export const upsertManning: (manning: Manning) => void = (manning) => {
    if (mannings.exists(manning.manningId)){
        mannings.updateManning(manning);
    }
    mannings.insertManning(manning);
}

export default { getAllMannings };