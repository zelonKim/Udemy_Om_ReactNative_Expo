import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { ReactNode, useEffect } from 'react';
import theme from '@/core/theme/use-theme-config';
import { ThemeProvider } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { logAPIUrl } from '@/core/utils/log';
import { APIProvider } from '@/core/api/api-provider';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    logAPIUrl();
  }, []);

  return (
    <GestureHandlerRootView>
      <APIProvider>
        <ThemeProvider value={theme}>
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </ThemeProvider>
      </APIProvider>
    </GestureHandlerRootView>
  );
};

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen name="properties/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="checkout" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}
