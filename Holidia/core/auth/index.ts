import { create } from 'axios';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from '../storage';

type TokenType = {
  access: string;
};

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      status: 'idle',
      signIn: (token) => {
        set({
          status: 'signIn',
          token: token,
        });
      },
      signOut: (token) => {
        set({
          status: 'signOut',
          token: null,
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


