# Stores

This folder is where you'll create your Zustand stores for authentication.

## Your Task

Create an `auth.ts` store here to manage authentication state.

The store should have:
- `isLoggedIn` - boolean state
- `login()` - function to set logged in
- `logout()` - function to set logged out

## Example Structure

```typescript
import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  // Your implementation here
}));

export default useAuth;
```

