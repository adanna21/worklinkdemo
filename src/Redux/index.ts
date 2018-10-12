import { applyMiddleware, combineReducers, createStore } from 'redux'; // 1. import store
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as fromDragDrop from './drag-and-drop/reducers';
import * as fromLogin from './login/reducers';
import { ISuperQueueProps } from '../React/screens/SupervisorQueueScreen';
import { IWorker, IWorkOrder } from '../data';
import { ILogInProps } from '../React/screens/LoginScreen';
import data from './initialData.json';

// root state, contains all state of app, typing
export interface IState {
  dragDrop: ISuperQueueProps;
  workOrders: Array<IWorkOrder>;
  employees: Array<IWorker>;
  login: ILogInProps;
}

// initial state of entire app, actual values
export const initialState: IState = {
  dragDrop: fromDragDrop.initialState,
  workOrders: data.workOrders,
  employees: data.employees,
  login: fromLogin.initialState
};

// root reducer
export const allReducers = combineReducers<IState>({
  dragDrop: fromDragDrop.reducer,
  workOrders: (state = data.workOrders) => state,
  employees: (state = data.employees) => state,
  login: fromLogin.reducer
  // nav: nav
} as any);

// export store
const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default store;
console.log('initial state', store.getState());
