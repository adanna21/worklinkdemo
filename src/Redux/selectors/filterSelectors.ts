import { createSelector } from 'reselect';
import { IState } from '..';
import { IWorkOrder } from '../../data';

const selectWorkOrders = (state: IState) => state.initialData.workOrders;

const selectFilters = (state: IState) => state.filteredData.filters;

export const selectFilteredWorkOrders = createSelector(
  [selectWorkOrders, selectFilters],
  (workOrders, statusFilter) => {
    // filter workOrders by status using the ids of statusFilter that are inuse
    const filteredWorkOrders: IWorkOrder[] = [];
    workOrders.filter(workOrder => {
      statusFilter.filter(status => {
        if (status.inuse && status.id === workOrder.status) {
          console.log('matched', workOrder);
          filteredWorkOrders.push(workOrder);
        }
      });
    });
    // if all statusFilter ids are inuse then show all workOrders
    if (filteredWorkOrders.length === 0) {
      return workOrders;
    } else {
      return filteredWorkOrders;
    }
  }
);
