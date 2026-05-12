# Flourish Auth - Expo Router Tab Navigation with Authentication

Learn to implement **Protected Routes** and authentication flows with Expo Router.

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Run the app:
```bash
bun start
```

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx           # Root layout (TODO: add Protected guards)
│   ├── (auth)/               # Auth route group
│   │   ├── _layout.tsx       # Auth stack navigator
│   │   ├── welcome.tsx       # TODO: Build landing screen
│   │   ├── sign-in.tsx       # TODO: Build sign in form
│   │   └── sign-up.tsx       # TODO: Build sign up form
│   ├── (tabs)/               # Tab group (from flourish)
│   │   ├── _layout.tsx       # Tab navigator (complete)
│   │   ├── index.tsx         # Home tab (complete)
│   │   ├── explore.tsx       # TODO
│   │   ├── search.tsx        # TODO
│   │   └── profile.tsx       # TODO: Add logout button
│   └── plant/
│       └── [id].tsx          # TODO
├── components/ui/            # Complete
├── lib/
│   ├── constants/            # Plant data (complete)
│   ├── stores/
│   │   └── README.md         # TODO: Create auth.ts store
│   └── utils/                # Complete
└── types/
```

## Your Tasks

### 1. Create Auth Store (`src/lib/stores/auth.ts`)

```typescript
import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));

export default useAuth;
```

### 2. Implement Protected Routes (`src/app/_layout.tsx`)

```tsx
import useAuth from "~/lib/stores/auth";

export default function RootLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Show auth screens when NOT logged in */}
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      {/* Show app screens when logged in */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="plant/[id]" />
      </Stack.Protected>
    </Stack>
  );
}
```

### 3. Build Auth Screens

**welcome.tsx** - Landing page with:
- App logo and tagline
- "Get Started" → sign-up
- "Sign In" link → sign-in

**sign-in.tsx** - Login form with:
- Email & password inputs
- Sign In button → calls `login()`
- Link to sign-up

**sign-up.tsx** - Registration form with:
- Name, email & password inputs
- Create Account button → calls `login()`
- Link to sign-in

### 4. Add Logout to Profile

```tsx
import useAuth from "~/lib/stores/auth";

export default function Profile() {
  const { logout } = useAuth();
  
  return (
    // ... profile content ...
    <Pressable onPress={logout}>
      <Text>Sign Out</Text>
    </Pressable>
  );
}
```

## Key Concepts

### Route Groups
- `(auth)` - Screens for unauthenticated users
- `(tabs)` - Main app for authenticated users

### Stack.Protected
Conditionally shows screens based on a guard boolean:
```tsx
<Stack.Protected guard={condition}>
  <Stack.Screen name="..." />
</Stack.Protected>
```

### Auth Flow
1. User opens app → sees welcome (not logged in)
2. User signs in → `login()` sets `isLoggedIn: true`
3. Protected Routes automatically show `(tabs)` 
4. User taps Sign Out → `logout()` → back to `(auth)`

No manual navigation needed - Protected Routes handle it!

## Available Resources

- Plant data in `lib/constants`
- UI components (Screen, Text, Squircle)
- Tab navigation already configured
- Home screen fully implemented
