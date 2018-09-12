import {
  ActionTypes,
  IGetUserFromAsync,
  IGetUserFromStore,
  ISaveUserInAsync,
  IUserLogin
} from './types';
import { AsyncStorage } from 'react-native';

export const getUserFromAsync = (user: IUserLogin): IGetUserFromAsync => {
  return {
    type: ActionTypes.GET_USER_FROM_ASYNC,
    payload: { user }
  };
};

export const getUserFromStore = (userId: string): IGetUserFromStore => {
  return {
    type: ActionTypes.GET_USER_FROM_STORE,
    payload: { userId }
  };
};

export const saveUserInAsync = () => async (
  user: IUserLogin
): ISaveUserInAsync => {
  try {
    const retrievedItem = await AsyncStorage.getItem(user.username);
    if (retrievedItem !== null) {
      const item = JSON.parse(retrievedItem);
      return {
        type: ActionTypes.SAVE_USER_IN_ASYNC,
        user: await item
      };
    }
  } catch (error) {
    console.log(error.message);
  }

  // return {
  //   type: ActionTypes.SAVE_USER_IN_ASYNC,
  //   payload: { user }
  // };
};

export type Action = IGetUserFromAsync | IGetUserFromStore | ISaveUserInAsync;
