// import { workers, workOrders } from '../../data';
import { workOrders, employees } from '../initialData.json';
import * as initialData from '../initialData.json';
import { IInitialApiData } from '../data-management/initialData/types.js';

export const fetchWorkersApi = () => {
  return Promise.resolve(employees);
};

export const fetchWorkOrdersApi = () => {
  return Promise.resolve(workOrders);
};

export const fetchApiData = () => {
  const data: IInitialApiData = {
    employees: initialData.employees,
    workOrders: initialData.workOrders
  };
  return Promise.resolve(data);
};

// export interface IInitialApiData {
//   workOrders: IWorkOrder[];
//   employees: IWorker[];
// }
