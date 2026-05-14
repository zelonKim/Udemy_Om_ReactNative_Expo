import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
