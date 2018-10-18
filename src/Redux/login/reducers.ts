import { Actions } from './actions';
import { ActionTypes, IUserLogin } from './types';
import { ILogInProps } from '../../React/screens/LoginScreen';

export const initialState: ILogInProps = {
  userSaved: false,
  loggedIn: false,
  user: null,
  username: null,
  userLogin: {
    id: '',
    username: '',
    password: ''
  },
  error: ''
};

export const reducer = (state: ILogInProps = initialState, action: Actions) => {
  const LOG_IN = ActionTypes.LOG_IN;
  const LOGOUT = ActionTypes.LOGOUT;
  const SAVED_USER_STATE = ActionTypes.SET_SAVED_USER_STATE;
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loggedIn: action.loggedIn,
        user: action.user,
        username: action.username
      };
    case SAVED_USER_STATE:
      return {
        ...state,
        userSaved: action.userSaved
      };
    case LOGOUT:
      if (action.loggedIn === false)
        return {
          ...state,
          loggedIn: action.loggedIn,
          user: null,
          username: null
        };
    default:
      return state;
  }
};
