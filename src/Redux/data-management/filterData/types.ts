import { IWorkOrder } from '../../../data';
import { string } from 'prop-types';

// Constants
export enum ActionTypes {
  CHANGE_FILTER_BY_STATUS = '@@filterData/CHANGE_FILTER_BY_STATUS',
  SORT_BY = '@@filterData/SORT_BY'
}

export interface IStatus {
  id: 'completed' | 'unassigned' | 'on hold' | 'assigned';
  inuse: boolean;
}

export interface ISortBy {
  sortBy: 'asc_date' | 'desc_date';
}
export interface IFilterByStatusProps {
  filters: IStatus[];
  // filteredWorkOrders: IWorkOrder[];
  sortBy: ISortBy;
}
export interface IChangeFilterByStatusAction {
  type: ActionTypes.CHANGE_FILTER_BY_STATUS;
  payload: { statusId: string };
}

export interface ISortByAction {
  type: ActionTypes.SORT_BY;
  payload: { sortBy: ISortBy };
}
