import { CHOOSE_SOUND } from './actionsTypes';

export const chooseSound = (id: number) => ({ type: CHOOSE_SOUND, payload: { id } } as const);
