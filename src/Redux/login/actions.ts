import { ActionTypes, ILogin, ISaveUserInAsync, IUserLogin } from './types';
import { setItem, getItem } from '../helpers/async-storage';
import { Dispatch } from 'redux';

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
          dispatch(setLoggedInState(true, user.username));
          return true;
        } else {
          dispatch(setLoggedInState(false, null));
          return false;
        }
      })
      .catch(() => dispatch(setLoggedInState(false, null)));
  };
};

export const setLoggedInState = (
  loggedInState: boolean,
  username: string | null
): ILogin => {
  return {
    type: ActionTypes.LOG_IN,
    loggedIn: loggedInState,
    username: username
  };
};

export type Action = ILogin | ISaveUserInAsync;
