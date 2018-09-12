import { applyMiddleware, combineReducers, createStore } from 'redux'; // 1. import store
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as fromDragDrop from './drag-and-drop/reducers';
import * as fromLogin from './login/reducers';
import { ISuperQueueProps } from '../React/screens/SupervisorQueueScreen';
import { IMeWorker, IWorkOrder } from '../data';
import { ILogInProps } from '../React/screens/LoginScreen';
import { workOrders, employees } from './initialData.json';

// root state, contains all state of app, typing
export interface IState {
  dragDrop: ISuperQueueProps;
  workOrders: IWorkOrder;
  employees: IMeWorker;
  login: ILogInProps;
}

// initial state of entire app, actual values
export const initialState: IState = {
  dragDrop: fromDragDrop.initialState,
  workOrders: workOrders,
  employees: employees,
  login: fromLogin.initialState
};

// root reducer
export const allReducers = combineReducers<IState>({
  dragDrop: fromDragDrop.reducer,
  workOrders: (state = workOrders) => state,
  employees: (state = employees) => state,
  login: fromLogin.reducer
});

// export store
const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default store;
console.log('initial state', store.getState());
