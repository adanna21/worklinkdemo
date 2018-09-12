import { IMeWorker } from '../../data';
// user Object
export interface IUserLogin {
  username: string;
  password: string;
}

// Constants
export const enum ActionTypes {
  GET_USER_FROM_ASYNC = '@@login/GET_USER_FROM_ASYNC',
  GET_USER_FROM_STORE = '@@login/ GET_USER_FROM_STORE',
  SAVE_USER_IN_ASYNC = '@@login/SAVE_USER_IN_ASYNC'
}

export interface IGetUserFromAsync {
  type: ActionTypes.GET_USER_FROM_ASYNC;
  payload: { user: IUserLogin };
}

export interface IGetUserFromStore {
  type: ActionTypes.GET_USER_FROM_STORE;
  payload: { userId: string };
}

export interface ISaveUserInAsync {
  type: ActionTypes.SAVE_USER_IN_ASYNC;
  payload: { user: IUserLogin };
}
