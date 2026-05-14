import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { ScreenContent } from '@/components/ScreenContent';

export default function Notification() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Four' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/two.tsx" title="Notification" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
