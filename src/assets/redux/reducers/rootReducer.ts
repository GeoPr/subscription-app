import { soundsReducer } from './soundsReducer/soundsReducer';
import { imagesReducer } from './imagesReducer/imagesReducer';
import { alertReducer } from './alertReducer/alertReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  alert: alertReducer,
  images: imagesReducer,
  sounds: soundsReducer,
});

export type TApp = ReturnType<typeof rootReducer>;

type TProperties<T> = T extends {
  [key: string]: infer U;
}
  ? U
  : never;
export type TActions<
  T extends {
    [key: string]: (...args: any[]) => any;
  }
> = ReturnType<TProperties<T>>;
