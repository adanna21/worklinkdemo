import { AsyncStorage } from 'react-native';
import { Action } from './actions';
import { ActionTypes, IUserLogin } from './types';
import { ILogInProps } from '../../React/screens/LoginScreen';

export const initialState: ILogInProps = {
  status: '',
  user: {
    username: '',
    password: ''
  },
  error: ''
};

export const reducer = (state: ILogInProps = initialState, action: Action) => {
  const GET_ASYNC = ActionTypes.GET_USER_FROM_ASYNC;
  const GET_STORE = ActionTypes.GET_USER_FROM_STORE;
  const SAVE_ASYNC = ActionTypes.SAVE_USER_IN_ASYNC;
  switch (action.type) {
    case GET_ASYNC:
      const currentUser = action.payload.user;
      const getUserId = async () => {
        try {
          const savedUser = await AsyncStorage.getItem(
            `${currentUser.username}`
          );
          if (savedUser) {
            const retrievedUser = JSON.parse(savedUser);
            if (retrievedUser.password === currentUser.password) {
              // if password matches return user
              return {
                ...state,
                user: retrievedUser,
                status: 'retrieved user'
              };
            } else {
              // if password doesn't match return status error
              return {
                error: 'password incorrect'
              };
            }
          }
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
          return {
            ...state,
            error: error.message
          };
        }
        getUserId();
      };
    case GET_STORE:
      return state;
    case SAVE_ASYNC:
      const key = action.payload.user.username;
      const item = action.payload.user;
      // const storeUser = async () => {
      //   try {
      //     //we want to wait for the Promise returned by AsyncStorage.setItem()
      //     //to be resolved to the actual value before returning the value
      //     let jsonOfItem = await AsyncStorage.setItem(
      //       key,
      //       JSON.stringify(item)
      //     );
      //     // console.log(JSON.parse(jsonOfItem));
      //     return {
      //       ...state,
      //       status: 'user saved'
      //     };
      //   } catch (error) {
      //     console.log(error.message);
      //     return {
      //       ...state,
      //       error: error.message
      //     };
      //   }
      // };
      const retrieveItem = async () => {
        try {
          const retrievedItem = await AsyncStorage.getItem(key);
          if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            return item;
          }
        } catch (error) {
          console.log(error.message);
        }
        return;
      };
      retrieveItem()
        .then(value => {
          console.log('value', value);
          return {
            ...state,
            status: 'user saved'
          };
        })
        .catch(error => {
          return {
            ...state,
            error: error.message
          };
        });

    default:
      return state;
  }
};
