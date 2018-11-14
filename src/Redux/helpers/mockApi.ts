import * as initialData from '../initialData.json';
import { IInitialApiData } from '../data-management/initialData/types.js';

export const fetchApiData = () => {
  const data: IInitialApiData = {
    employees: initialData.employees,
    workOrders: initialData.workOrders
  };
  return Promise.resolve(data);
};
