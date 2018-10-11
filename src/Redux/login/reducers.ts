import { Actions } from './actions';
import { ActionTypes, IUserLogin } from './types';
import { ILogInProps } from '../../React/screens/LoginScreen';
import NavigationService from '../../config/navigation/NavigationService';

export const initialState: ILogInProps = {
  userSaved: false,
  loggedIn: false,
  username: null,
  user: {
    id: '',
    username: '',
    password: ''
  },
  error: ''
};

export const reducer = (state: ILogInProps = initialState, action: Actions) => {
  const LOG_IN = ActionTypes.LOG_IN;
  const SAVED_USER_STATE = ActionTypes.SET_SAVED_USER_STATE;
  switch (action.type) {
    case LOG_IN:
      // const title = action.user[0].title;
      // if (title === 'employee') {
      //   console.log('employee');

      //   // NavigationService.navigateTo('EmployeeNavigator');
      // } else if (title === 'supervisor') {
      //   console.log('supervisor');

      //   // NavigationService.navigateTo('SuperMainStack');
      // }
      return {
        ...state,
        loggedIn: action.loggedIn,
        username: action.user
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
