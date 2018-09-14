import { AsyncStorage } from 'react-native';
import { Action } from './actions';
import { ActionTypes, IUserLogin } from './types';
import { ILogInProps } from '../../React/screens/LoginScreen';

export const initialState: ILogInProps = {
  userSaved: false,
  loggedIn: false,
  username: null,
  user: {
    username: '',
    password: ''
  },
  error: ''
};

export const reducer = (state: ILogInProps = initialState, action: Action) => {
  const LOG_IN = ActionTypes.LOG_IN;
  const SAVED_USER_STATE = ActionTypes.SET_SAVED_USER_STATE;
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loggedIn: action.loggedIn,
        username: action.username
      };
    case SAVED_USER_STATE:
      return {
        ...state,
        userSaved: action.userSaved
      };
    default:
      return state;
  }
};
