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
  SET_SAVED_USER_STATE = '@@login/SET_SAVED_USER_STATE',
  LOGOUT = '@@login/LOGOUT'
}

export interface ILoginAction {
  type: ActionTypes.LOG_IN;
  loggedIn: boolean;
  user: IWorker[] | string | null;
  username: string;
}

export interface ISetSavedUserStateAction {
  type: ActionTypes.SET_SAVED_USER_STATE;
  userSaved: boolean;
}

export interface ILogoutAction {
  type: ActionTypes.LOGOUT;
  loggedIn: boolean;
  // user: null;
}
