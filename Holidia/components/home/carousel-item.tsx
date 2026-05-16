import { WIDTH } from '@/core/utils/layout';
import { View } from 'react-native';
import { useRef } from 'react';
import Image from '../image';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';

type CarouselItemProps = {
  property: Property;
};


const CarouselItem = ({ property }: CarouselItemProps) => {
  const progressValue = useSharedValue<number>(0);

  const carouselRef = useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        index,
        animated: true,
      });
    }
  };

  return (
    <View>
      <Carousel
        ref={carouselRef}
        width={WIDTH - 32}
        height={320}
        scrollAnimationDuration={1000}
        autoPlay={false}
        overscrollEnabled={false}
        data={property.images}
        renderItem={({ item: imageUri }) => {
          return (
            <View className="mx-1">
              <Image source={imageUri} />
            </View>
          );
        }}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
        }}
      />

      <Animated.View className="absolute bottom-4 w-full">
        <Pagination.Basic
          progress={progressValue}
          data={property.images.map((_property) => ({ color: _property }))}
          onPress={onPressPagination}
          activeDotStyle={{
            width: 16,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
            backgroundColor: 'yellow',
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
            backgroundColor: '#F3EFE9',
          }}
          containerStyle={{
            paddingVertical: 8,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default CarouselItem;
