import 'react-native-get-random-values';
import '../global.css';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { useThemeConfig } from '@/core/theme/use-theme-config';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => {
  const theme = useThemeConfig();

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider value={theme}>{children}</ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </Providers>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});
