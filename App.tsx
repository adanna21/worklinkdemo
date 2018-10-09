import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import MainNavigator from './src/config/router';
import store from './src/Redux';
import NavigationService from './src/config/NavigationService';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* SafeAreaView background must be colored to see status bar */}
        <SafeAreaView
          style={[styles.container, { backgroundColor: '#590889' }]}
        >
          <StatusBar barStyle="light-content" />
          <MainNavigator ref={navigatorRef => {NavigationService.setNav(navigatorRef);}} />
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
