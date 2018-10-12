import {
  NavigationActions,
  NavigationParams,
  NavigationRoute,
  NavigationContainerComponent,
  NavigationContainer
} from 'react-navigation';

let _nav: NavigationContainerComponent;

function setNav(nav: NavigationContainerComponent) {
  _nav = nav;
}

function navigateTo(route: string, params?: NavigationParams) {
  _nav.dispatch(NavigationActions.navigate({ routeName: route, params })); //dispatch actually exists, the types are just out of date i guess?
}

export default { setNav, navigateTo };
