import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateStorage } from 'zustand/middleware';

export const storage = AsyncStorage;

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await storage.getItem(key);
  return value ? JSON.parse(value) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  await storage.setItem(key, JSON.stringify(value));
}

export async function removeItem(key: string) {
  await storage.removeItem(key);
}

export const zustandStorage: StateStorage = {
  getItem,
  setItem,
  removeItem,
};


