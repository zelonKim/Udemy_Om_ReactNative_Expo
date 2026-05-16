import Container from '@/components/Container';
import Header from '@/components/header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, TouchableOpacity, View } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlashList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import PropertyImage from '@/components/property/property-image';
import { PROPERTIES } from '@/core/constants/data';
import Text from '@/components/text';
import { PRIMARY } from '@/core/theme/colors';
import AmenitiesList from './amenities-list';
import { Calendar, fromDateId, toDateId, useDateRange } from '@marceloterreiro/flash-calendar';
import { today } from '@/core/constants/today';
import { addMonths, subMonths } from 'date-fns';
import { Button } from '@/components/Button';
import { calendarTheme } from '@/core/theme/calendar-theme';

const Property = () => {
  const { id } = useLocalSearchParams();

  const property = PROPERTIES.find((_property) => _property.id === id) as unknown as Property;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['60%'], []);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={'close'}
      />
    );
  }, []);

  const [month, setMonth] = useState(new Date());

  const { calendarActiveDateRanges, onCalendarDayPress } = useDateRange();

  console.log({ calendarActiveDateRanges });

  return (
    <Container>
      <Header title="Property" />
      <ScrollView className="bg-gray-100 p-4">
        <PropertyImage
          imageUrl={property?.images[0]}
          rating={5}
          isFavorite={property?.is_favorite}
        />

        <Text variant="body-primary" className="text-center">
          {property?.name}
        </Text>

        <View className="flex flex-row items-center justify-center">
          <Ionicons name="location" size={16} color={PRIMARY} />
          <Text variant="body-primary" className="">
            {property.city}, {property.country}
          </Text>
        </View>

        <Text variant="body" className="my-5 text-gray-700">
          {property.description}
        </Text>

        <AmenitiesList amenities={property.amenities} />

        <View className=" -z-10 mx-4 mt-auto flex flex-row items-center justify-center py-6">
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current?.expand();
            }}
            className="flex-grow"
            style={{ backgroundColor: PRIMARY, borderRadius: 16, paddingVertical: 16 }}>
            <Text variant="button" className="text-center">
              예약하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        enableDynamicSizing={true}>
        <BottomSheetView style={{ flex: 1 }}>
          <View className="d-flex mt-3 flex-row justify-between px-6">
            <Button
              title="이전 달"
              onPress={() => {
                setMonth(subMonths(month, 1));
              }}
            />

            <Button
              title="다음 달"
              onPress={() => {
                setMonth(addMonths(month, 1));
              }}
            />
          </View>

          <Calendar
            calendarMinDateId={today}
            calendarMonthId={toDateId(month)}
            calendarActiveDateRanges={calendarActiveDateRanges}
            onCalendarDayPress={onCalendarDayPress}
            theme={calendarTheme}
          />

          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
            style={{ backgroundColor: PRIMARY, borderRadius: 16, paddingVertical: 12 }}
            className="d-flex mx-10 mt-8 flex-row justify-center gap-2 ">
            <Ionicons name="checkmark-circle" size={23} color={'white'} />
            <Text variant="body" className="text-center text-white">
              확정하기
            </Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </Container>
  );
};

export default Property;
