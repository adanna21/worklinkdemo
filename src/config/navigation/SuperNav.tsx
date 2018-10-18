import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SupervisorQueue from '../../React/screens/SupervisorQueueScreen';
import Unassigned from '../../React/screens/UnassignedScreen';
import OrderDetail from '../../React/screens/OrderDetail';
import Notices from '../../React/screens/Notices';
import Header from '../../React/components/Header/Header';

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

const SuperTabNavigator = createMaterialTopTabNavigator(
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

const SuperMainStack = createStackNavigator(
  {
    SuperNavigator: SuperTabNavigator
  },
  {
    initialRouteName: 'SuperNavigator',
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

export default SuperMainStack;
