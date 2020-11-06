import { CHOOSE_IMAGE } from './actionsTypes';

export const chooseImage = (id: number) => ({ type: CHOOSE_IMAGE, payload: { id } } as const);
