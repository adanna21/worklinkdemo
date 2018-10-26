import { workers, workOrders } from '../../data';
import * as initialData from '../initialData.json';

export const fetchWorkersApi = () => {
  return Promise.resolve(workers);
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
