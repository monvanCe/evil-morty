import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export default {
  setItem,
  getItem,
  removeItem,
};
