import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = AsyncStorage;

export const zustandStorage = {
  setItem: async (name: string, value: string) => {
    await storage.setItem(name, value);
  },

  getItem: async (name: string) => {
    const value = await storage.getItem(name);
    return value ?? null;
  },

  removeItem: async (name: string) => {
    await storage.removeItem(name);
  },
};
