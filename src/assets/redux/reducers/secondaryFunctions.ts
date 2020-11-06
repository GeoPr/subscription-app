import { IItem } from './secondaryInterfaces';

export function chooseItem(state: Array<IItem>, id: number) {
  return state.map((item: IItem) => {
    item.isActive = false;

    if (item.id === id) {
      item.isActive = !item.isActive;
    }

    return item;

    // return item.id === id ? { ...item, isActive: true } : item;
  });
}
