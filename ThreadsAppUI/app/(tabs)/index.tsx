import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import { useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '@/components/card';
import Header from '@/components/Header';
import { DATA } from '@/core/constants/data';
import { COLORS } from '@/core/theme/colors';
import { Ionicons } from '@expo/vector-icons';

const snapPoints = ['60%'];

export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = (props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Card item={item} bottomSheetRef={bottomSheetRef} />}
        ListHeaderComponent={Header}
        ItemSeparatorComponent={() => <View className="h-[0.5] w-full bg-gray-200" />}
      />

      <BottomSheet
        snapPoints={snapPoints}
        index={-1}
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        handleStyle={{
          backgroundColor: COLORS.gray[100],
          borderTopEndRadius: 24,
          borderTopStartRadius: 24,
        }}>
        <BottomSheetView style={{ flex: 1 }}>
          <View className="flex-1 bg-[#f5f5f5] p-4">
            <View className="flex rounded-2xl bg-white">
              <View className="my-4 flex flex-row items-center justify-between px-4 py-2">
                <Text className="font-semibold">Save</Text>
                <Ionicons name="bookmark-outline" size={16} color={COLORS.textGray} />
              </View>
              <View className="h-[0.5] w-full bg-gray-200" />
              <View className="my-4 flex flex-row items-center justify-between px-4 py-2">
                <Text className="font-semibold">Not interested</Text>
                <Ionicons name="eye-off-outline" size={16} color={COLORS.textGray} />
              </View>
            </View>

            <View className="mt-4 rounded-2xl bg-white p-4">
              <View className="my-2 flex flex-row items-center justify-between py-2">
                <Text className="font-semibold">Mute</Text>
                <Ionicons name="mic-off" size={16} color={COLORS.textGray} />
              </View>
              <View className="h-[0.5] w-full bg-gray-200" />
              <View className="my-2 flex flex-row items-center justify-between py-2">
                <Text className="font-semibold">Not interested</Text>
                <Ionicons name="eye-off-sharp" size={16} color={COLORS.textGray} />
              </View>
              <View className="h-[0.5] w-full bg-gray-200" />
              <View className="my-2 flex flex-row items-center justify-between py-2">
                <Text className="font-semibold text-red-500">Report</Text>
                <Ionicons name="eye-off-outline" size={16} color={COLORS.red[500]} />
              </View>
            </View>
          </View>
          <View className="my-4 flex flex-row items-center justify-between px-4"></View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
});
