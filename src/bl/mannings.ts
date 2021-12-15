import mannings from '../dal/mannings';
import { Manning } from '../types/mannings';

export const getMannings: (unitId: number) => Manning[] = (unitId) => {
    return mannings.getMannings(unitId);
}

export const upsertManning: (manning: Manning) => void = (manning) => {
    if (mannings.exists(manning.manningId)){
        mannings.updateManning(manning);
    }
    mannings.insertManning(manning);
}

export default { getMannings };