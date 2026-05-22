import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SplashScreen, Stack } from 'expo-router';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import theme from '@/core/theme/use-theme-config';
import { ThemeProvider } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { APIProvider } from '@/core/api/api-provider';
import { hydrateAuth } from '@/core/auth';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { Linking } from 'react-native';
import Toast from 'react-native-toast-message';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

hydrateAuth();
SplashScreen.preventAutoHideAsync();

const Providers = ({ children }: { children: ReactNode }) => {
  const { handleURLCallback } = useStripe();

  const handleDeepLink = useCallback(
    async (url: string | null) => {
      if (!url) return;
      try {
        const stripeHandled = await handleURLCallback(url);
        if (stripeHandled) {
          console.log('handle stripe payment url', stripeHandled);
        } else {
          console.log('nothing url');
        }
      } catch (error) {
        console.log(error);
      }
    },
    [handleURLCallback]
  );

  useEffect(() => {
    const getInitialURL = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        await handleDeepLink(initialUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getInitialURL();
    const subscription = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });
    return () => {
      subscription.remove();
    };
  }, [handleDeepLink]);

  return (
  <GestureHandlerRootView>
      <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''}>
        <APIProvider>
          <ThemeProvider value={theme}>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </ThemeProvider>
        </APIProvider>
      </StripeProvider>
    <Toast />
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
        <Stack.Screen name="payment-successful" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}
