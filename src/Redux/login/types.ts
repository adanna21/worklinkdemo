import { IWorker } from '../../data';
// user Object
export interface IUserLogin {
  id: string;
  username: string;
  password: string;
}

// Constants
export enum ActionTypes {
  LOG_IN = '@@login/LOG_IN',
  // SET_LOGGED_IN_STATE = '@@login/SET_LOGGED_IN_STATE',
  SET_SAVED_USER_STATE = '@@login/SET_SAVED_USER_STATE'
}

export interface ILogin {
  type: ActionTypes.LOG_IN;
  loggedIn: boolean;
  user: IWorker[] | string | null;
}

export interface ISaveUserInAsync {
  type: ActionTypes.SET_SAVED_USER_STATE;
  userSaved: boolean;
}
