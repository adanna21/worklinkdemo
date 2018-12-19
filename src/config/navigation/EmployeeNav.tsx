import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmployeeQueue from '../../React/screens/EmployeeQueueScreen';
import Unassigned from '../../React/screens/UnassignedScreen';
import OrderDetail from '../../React/screens/OrderDetail';
import Notices from '../../React/screens/Notices';
import Header from '../../React/components/Header/Header';
import { NYU_VIOLET } from 'react-native-dotenv';

// Stack Nav for Supervisor screens
const EmployeeWorkOrderListStack = createStackNavigator(
  {
    Feed: {
      screen: EmployeeQueue
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

const EmployeeTabNavigator = createMaterialTopTabNavigator(
  {
    'MY QUEUE': { screen: EmployeeWorkOrderListStack },
    UNASSIGNED: { screen: UnassignedListStack },
    CALENDAR: { screen: EmployeeWorkOrderListStack },
    NOTICES: { screen: Notices }
  },
  {
    tabBarOptions: {
      activeTintColor: NYU_VIOLET,
      inactiveTintColor: '#233e4a',
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: NYU_VIOLET
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

const EmployeeMainStack = createStackNavigator(
  {
    MainNavigator: EmployeeTabNavigator
  },
  {
    initialRouteName: 'MainNavigator',
    headerMode: 'float',
    navigationOptions: {
      // headerForceInset gets rid of 20px padding caused by SafeAreaView
      headerForceInset: { top: 'never', bottom: 'never' },
      headerStyle: {
        height: 60,
        backgroundColor: NYU_VIOLET
      },
      headerTitle: <Header />
    }
  }
);
export default EmployeeMainStack;
