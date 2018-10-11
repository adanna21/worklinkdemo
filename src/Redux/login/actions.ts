import { ActionTypes, ILogin, ISaveUserInAsync, IUserLogin } from './types';
import { setItem, getItem } from '../helpers/async-storage';
import { Dispatch } from 'redux';
import NavigationService from '../../config/navigation/NavigationService';
import store from '../index';
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
const setSavedUserState = (savedUserState: boolean): ISaveUserInAsync => ({
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
          const employees = store.getState().employees;
          const currentUser = employees.filter(
            employee => employee.id.toString() === user.id
          );
          dispatch(setLoggedInState(true, currentUser));
          const title = currentUser[0].title;
          if (title === 'employee') {
            NavigationService.navigateTo('EmployeeNavigator');
          } else if (title === 'supervisor') {
            NavigationService.navigateTo('EmployeeNavigator');
          }
          return true;
        } else {
          dispatch(setLoggedInState(false, 'user not found'));
          return false;
        }
      })
      .catch(() => dispatch(setLoggedInState(false, null)));
  };
};

export const setLoggedInState = (
  loggedInState: boolean,
  user: IWorker[] | string | null
): ILogin => {
  return {
    type: ActionTypes.LOG_IN,
    loggedIn: loggedInState,
    user: user
  };
};

export type Actions = ILogin | ISaveUserInAsync;
