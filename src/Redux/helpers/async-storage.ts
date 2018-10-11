import { AsyncStorage } from 'react-native';

export const setItem = async (key: string, value: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('AsyncStorage#setItem error: ' + error.message);
  }
};

export const getItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key).then(result => {
      if (result) {
        return JSON.parse(result);
      }
    });
  } catch (e) {
    console.error(
      'AsyncStorage#getItem error deserializing JSON for key: ' + key,
      e.message
    );
  }
};

export const removeItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};
