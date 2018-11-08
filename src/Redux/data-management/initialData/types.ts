import { IWorkOrder, IWorker } from '../../../data';

// Constants
export enum ActionTypes {
  GET_INITIAL_DATA_BEGIN = '@@initialData/GET_INITIAL_DATA_BEGIN',
  GET_INITIAL_DATA_SUCCESS = '@@initialData/GET_INITIAL_DATA_SUCCESS',
  GET_INITIAL_DATA_FAILURE = '@@initialData/GET_INITIAL_DATA_FAILURE',
  CHANGE_FILTER = '@@initialData/CHANGE_FILTER'
}

export interface IGetInitialDataBeginAction {
  type: ActionTypes.GET_INITIAL_DATA_BEGIN;
}

export interface IGetInitialDataSuccessAction {
  type: ActionTypes.GET_INITIAL_DATA_SUCCESS;
  payload: { initialData: IInitialDataProps };
}

export interface IGetInitialDataFailureAction {
  type: ActionTypes.GET_INITIAL_DATA_FAILURE;
  payload: { error: any };
}

export interface IInitialDataProps {
  workOrders: IWorkOrder[];
  employees: IWorker[];
  loading: boolean;
  filters: IFilter[];
  error: any;
}

export interface IInitialApiData {
  workOrders: IWorkOrder[];
  employees: IWorker[];
}

export interface IFilter {
  id: 'completed' | 'unassigned' | 'on hold';
  inuse: boolean;
}

export interface IChangeFilterAction {
  type: ActionTypes.CHANGE_FILTER;
  payload: { filter: IFilter };
}
