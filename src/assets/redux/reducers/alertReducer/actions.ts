import { SHOW_ALERT, HIDE_ALERT } from './actionsTypes';

export const showAlert = () => ({ type: SHOW_ALERT } as const);
export const hideAlert = () => ({ type: HIDE_ALERT } as const);
