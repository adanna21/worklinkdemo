import React, { Component } from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmployeeQueue from '../React/screens/EmployeeQueueScreen';
import SupervisorQueue from '../React/screens/SupervisorQueueScreen';
import Unassigned from '../React/screens/UnassignedScreen';
import OrderDetail from '../React/screens/OrderDetail';
import Calendar from '../React/screens/CalendarScreen';
import LoginScreen from '../React/screens/LoginScreen';
import Notices from '../React/screens/Notices';
import Header from '../React/components/Header';

// Stack Nav for Supervisor screens
const SuperWorkOrderListStack = createStackNavigator(
  {
    Feed: {
      screen: SupervisorQueue
    },
    Details: {
      screen: OrderDetail,
      navigationOptions: {
        title: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const UnassignedListStack = createStackNavigator(
  {
    Feed: {
      screen: Unassigned
    },
    Details: {
      screen: OrderDetail,
      navigationOptions: {
        title: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const TabNavigator = createMaterialTopTabNavigator(
  {
    'MY QUEUE': { screen: SuperWorkOrderListStack },
    UNASSIGNED: { screen: UnassignedListStack },
    CALENDAR: { screen: SuperWorkOrderListStack },
    NOTICES: { screen: Notices }
  },
  {
    tabBarOptions: {
      activeTintColor: '#590889',
      inactiveTintColor: '#233e4a',
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: '#590889'
      },
      showIcon: true
    },
    swipeEnabled: false,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MY QUEUE') {
          iconName = 'format-list-bulleted';
        } else if (routeName === 'UNASSIGNED') {
          iconName = 'account';
        } else if (routeName === 'CALENDAR') {
          iconName = 'calendar-clock';
        } else {
          iconName = 'bullhorn';
        }
        return <Icon name={iconName} size={25} color={`${tintColor}`} />;
      }
    })
  }
);

const MainStack = createStackNavigator(
  {
    MainNavigator: TabNavigator
  },
  {
    initialRouteName: 'MainNavigator',
    headerMode: 'float',
    navigationOptions: {
      // headerForceInset gets rid of 20px padding caused by SafeAreaView
      headerForceInset: { top: 'never', bottom: 'never' },
      headerStyle: {
        height: 60,
        backgroundColor: '#590889'
      },
      headerTitle: <Header />
    }
  }
);
const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerTitle: 'NYU WorkLink',
      headerStyle: {
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#590889'
      }
    }
  }
);

const MainNavigator = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    MainNavigator: MainStack,
    Auth: AuthStack
  },
  { initialRouteName: 'Auth' }
);

export default MainNavigator;
