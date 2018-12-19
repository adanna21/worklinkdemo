import React, { Component, RefObject } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import MainNavigator from './src/config/navigation';
import store from './src/Redux';
import NavigationService from './src/config/navigation/NavigationService';
import {NYU_VIOLET} from 'react-native-dotenv';

export default class App extends Component {
  // navigatorRef: RefObject<NavigationContainerComponent> = React.createRef();
  render() {
    return (
      <Provider store={store}>
        {/* SafeAreaView background must be colored to see status bar */}
        <SafeAreaView
          style={[styles.container, { backgroundColor: NYU_VIOLET }]}
        >
          <StatusBar barStyle="light-content" />
          <MainNavigator
            ref={(navigatorRef: any) => {
              NavigationService.setNav(navigatorRef);
            }}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
