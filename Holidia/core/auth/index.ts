import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from '../storage';

type TokenType = {
  access: string;
};

interface AuthState {
  user: string | null;
  setUser: (email: string | null) => void;
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      status: 'idle',
      setUser: (email) => {
        set({
          user: email,
        });
      },
      signIn: (token) => {
        set({
          status: 'signIn',
          token: token,
        });
      },
      signOut: () => {
        set({
          status: 'signOut',
          token: null,
          user: null,
        });
      },
      hydrate: () => {
        const { token } = get();
        if (token) {
          set({ status: 'signIn' });
        } else {
          set({ status: 'signOut' });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useAuth;



export const getToken = () => useAuth.getState().token;

export const signOut = () => useAuth.getState().signOut();
