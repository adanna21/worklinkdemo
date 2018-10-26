import {
  ActionTypes,
  ILoginAction,
  ISetSavedUserStateAction,
  IUserLogin,
  ILogoutAction
} from './types';
import { setItem, getItem, removeItem } from '../helpers/async-storage';
import { Dispatch } from 'redux';
import NavigationService from '../../config/navigation/NavigationService';
import store, { IState } from '../index';
import { IWorker } from '../../data';

// Add user to Async Storage
export const saveUserInAsync = (user: IUserLogin) => {
  return async (dispatch: Dispatch) => {
    await setItem(user.username, user)
      .then(() => {
        dispatch(setSavedUserState(true));
      })
      .catch(() => dispatch(setSavedUserState(false)));
  };
};
const setSavedUserState = (
  savedUserState: boolean
): ISetSavedUserStateAction => ({
  type: ActionTypes.SET_SAVED_USER_STATE,
  userSaved: savedUserState
});

// Login A User
export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    await getItem(username)
      .then(user => {
        if (username === user.username && password === user.password) {
          // get current user from store
          const state: IState = store.getState();
          const employees = state.employees;
          console.log('employees', employees);
          const currentUser = employees.filter(
            (employee: IWorker) => employee.id.toString() === user.id
          );
          dispatch(setLoggedInState(true, currentUser, username));
          const title = currentUser[0].title;
          if (title === 'employee') {
            NavigationService.navigateTo('EmployeeNavigator');
          } else if (title === 'supervisor') {
            NavigationService.navigateTo('SuperNavigator');
          }
          return true;
        } else {
          dispatch(setLoggedInState(false, 'user not found', 'not found'));
          return false;
        }
      })
      .catch(() => dispatch(setLoggedInState(false, null, 'none')));
  };
};

export const setLoggedInState = (
  loggedInState: boolean,
  user: IWorker[] | string | null,
  username: string
): ILoginAction => {
  return {
    type: ActionTypes.LOG_IN,
    loggedIn: loggedInState,
    user: user,
    username: username
  };
};

// LogOut
export const logout = (username: string) => {
  return async (dispatch: Dispatch) => {
    await removeItem(username)
      .then(() => {
        dispatch(setLoggedOutState(false));
        NavigationService.navigateTo('Auth');
      })
      .catch(() => dispatch(setLoggedOutState(true)));
  };
};
export const setLoggedOutState = (loggedInState: boolean): ILogoutAction => ({
  type: ActionTypes.LOGOUT,
  loggedIn: loggedInState
});
export type Actions = ILoginAction | ISetSavedUserStateAction | ILogoutAction;
