import { createSelector } from 'reselect';
import { IState } from '..';
import { IWorkOrder } from '../../data';
import { compareValues } from '../helpers/sortingFunctions';

const selectWorkOrders = (state: IState) => state.initialData.workOrders;

const selectFilters = (state: IState) => state.filteredData.filters;

const selectSortBy = (state: IState) => state.filteredData.sortBy;

const selectSorting = (state: IState) => state.filteredData.sorting;

export const selectFilteredWorkOrders = createSelector(
  [selectWorkOrders, selectFilters, selectSortBy, selectSorting],
  (workOrders, statusFilter, sortBy, sorting) => {
    let sortedWorkOrders = [...workOrders];
    const filteredWorkOrders: IWorkOrder[] = [];
    // filter workOrders by status using the ids of statusFilter that are inuse
    workOrders.filter(workOrder => {
      statusFilter.filter(status => {
        if (status.inuse && status.id === workOrder.status) {
          console.log('matched', workOrder);
          filteredWorkOrders.push(workOrder);
        }
      });
    });

    // if no statusFilter ids are inuse then show all workOrders
    if (filteredWorkOrders.length === 0 && !sorting) {
      return workOrders;
    } else if (filteredWorkOrders.length === 0 && sorting) {
      if (sortBy === 'asc_date') {
        return sortedWorkOrders.sort(compareValues('date'));
      } else if (sortBy === 'desc_date') {
        return sortedWorkOrders.sort(compareValues('date', 'desc'));
      }
    } else if (filteredWorkOrders.length > 0 && !sorting) {
      return filteredWorkOrders;
    }
    {
      if (sortBy === 'asc_date') {
        return filteredWorkOrders.sort(compareValues('date'));
      } else if (sortBy === 'desc_date') {
        return filteredWorkOrders.sort(compareValues('date', 'desc'));
      }
    }
  }
);
