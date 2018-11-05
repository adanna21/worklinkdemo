import { IWorkOrder, IWorker } from '../../../data';

// Constants
export enum ActionTypes {
  GET_INITIAL_DATA_BEGIN = '@@data/GET_INITIAL_DATA_BEGIN',
  GET_INITIAL_DATA_SUCCESS = '@@data/GET_INITIAL_DATA_SUCCESS',
  GET_INITIAL_DATA_FAILURE = '@@data/GET_INITIAL_DATA_FAILURE'
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
  error: any;
}

export interface IInitialApiData {
  workOrders: IWorkOrder[];
  employees: IWorker[];
}
