// import { workers, workOrders } from '../../data';
import { workOrders, employees } from '../initialData.json';
import * as initialData from '../initialData.json';

export const fetchWorkersApi = () => {
  return Promise.resolve(employees);
};

export const fetchWorkOrdersApi = () => {
  return Promise.resolve(workOrders);
};

export const fetchApiData = () => {
  const data = {
    employees: initialData.employees,
    workOrders: initialData.workOrders
  };
  return Promise.resolve(data);
};

// export interface IInitialApiData {
//   workOrders: IWorkOrder[];
//   employees: IWorker[];
// }
