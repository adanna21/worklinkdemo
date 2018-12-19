import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import EmployeeMainStack from './EmployeeNav';
import LoginScreen from '../../React/screens/LoginScreen';
import SuperMainStack from './SuperNav';
import { NYU_VIOLET } from 'react-native-dotenv';

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
        color: NYU_VIOLET
      }
    }
  }
);
// MainNavigator = Router
export const MainNavigator = createSwitchNavigator(
  {
    SuperNavigator: SuperMainStack,
    EmployeeNavigator: EmployeeMainStack,
    Auth: AuthStack
  },
  { initialRouteName: 'SuperNavigator' }
);

export default MainNavigator;
