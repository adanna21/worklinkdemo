import { combineReducers } from 'redux';
import { MainNavigator } from '../../config/router';
import { NavigationScreenProp, NavigationAction } from 'react-navigation';

// const router = MainNavigator.router;
// const mainNavAction = router.getActionForPathAndParams('Auth');
// export const initialNavState = router.getStateForAction(mainNavAction);

// export interface INavProps {
//   nav: NavigationScreenProp<any, any>;
// }

// export const NavReducer = (
//   state: INavProps = initialNavState,
//   action: NavigationAction
// ) => {
//   return router.getStateForAction(action, state);
// };
// navigation configurations
const router = MainNavigator.router;
const homeNavAction = router.getActionForPathAndParams('Auth');
const initialNavState = router.getStateForAction(homeNavAction);

export const nav = (state = initialNavState, action) => {
  const nextState = router.getStateForAction(action, state);
  return nextState || state;
};
