import { IWorkOrder } from '../../data';

export const compareValues = (key: string, order = 'asc') => {
  return function(a: IWorkOrder, b: IWorkOrder) {
    // if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    //     // property doesn't exist on either object
    //     return 0;
    // }
    let itemA;
    let itemB;
    if (key === 'date') {
      itemA = new Date(a.history[a.history.length - 1].time).getTime();
      itemB = new Date(b.history[b.history.length - 1].time).getTime();
    }

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return order == 'desc' ? comparison * -1 : comparison;
  };
};
