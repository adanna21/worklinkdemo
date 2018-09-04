import { applyMiddleware, combineReducers, createStore } from 'redux'; // 1. import store
import logger from 'redux-logger';
import * as fromDragDrop from './drag-and-drop/reducers';
import { ISuperQueueProps } from '../React/screens/SupervisorQueueScreen';

// root state, contains all state of app, typing
export interface IState {
  dragDrop: ISuperQueueProps;
}

// initial state of entire app, actual values
export const initialState: IState = {
  dragDrop: fromDragDrop.initialState
};

// root reducer
export const allReducers = combineReducers<IState>({
  dragDrop: fromDragDrop.reducer
});

// export store
const store = createStore(
  allReducers,
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
