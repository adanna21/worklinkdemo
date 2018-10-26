import { applyMiddleware, combineReducers, createStore } from 'redux'; // 1. import store
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as fromDragDrop from './drag-and-drop/reducers';
import * as fromLogin from './login/reducers';
import * as fromInitialData from './data-management/initialData/reducers';
import { ISuperQueueProps } from '../React/screens/SupervisorQueueScreen';
import { IWorker, IWorkOrder } from '../data';
import { ILogInProps } from '../React/screens/LoginScreen';
import { IInitialDataProps } from './data-management/initialData/types';
import { IDragDropProps } from './drag-and-drop/types';

import data from './initialData.json';

// root state, contains all state of app, typing
export interface IState {
  login: ILogInProps;
  initialData: IInitialDataProps;
  dragDrop: IDragDropProps;
  // workOrders: Array<IWorkOrder>;
  employees: Array<IWorker>;
}

// initial state of entire app, actual values
export const initialState: IState = {
  login: fromLogin.initialState,
  initialData: fromInitialData.initialState,
  dragDrop: fromDragDrop.initialState,
  // workOrders: data.workOrders,
  employees: data.employees
};

// root reducer
export const allReducers = combineReducers<IState>({
  login: fromLogin.reducer,
  initialData: fromInitialData.reducer,
  dragDrop: fromDragDrop.reducer,
  // workOrders: (state = data.workOrders) => state,
  employees: (state = data.employees) => state
} as any);

// export store
const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default store;
console.log('initial state', store.getState());
