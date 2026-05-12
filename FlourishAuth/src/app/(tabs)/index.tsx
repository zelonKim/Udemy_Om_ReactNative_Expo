import { View, Image, Pressable, FlatList } from "react-native";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { Squircle } from "~/components/ui/squircle";
import { customPlants } from "~/lib/constants";
import { useRouter } from "expo-router";
import { format } from "date-fns";
import { getWeekDays } from "~/lib/utils";

const now = new Date();
const weekDays = getWeekDays(now);

const HomeHeader = () => {
  return (
    <View className="px-5 pt-4 pb-4">
      <View className="flex-row justify-between items-start mb-5">
        <View className="flex-row items-center gap-2">
          <Text variant="display" className="text-4xl">
            {format(now, "EEE")}
          </Text>
          <View className="w-3 h-3 rounded-full bg-accent" />
        </View>

        <View className="items-end">
          <Text variant="subtitle">{format(now, "MMMM d")}</Text>
          <Text className="text-lg text-foreground/70">
            {format(now, "yyyy")}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between">
        {weekDays.map((day, index) => (
          <View key={index} className="items-center">
            {day.isToday ? (
              <Squircle
                className="bg-primary px-2 py-2 items-center rounded-xl"
                cornerSmoothing={1}
              >
                <Text className="text-lg font-bold text-primary-foreground">
                  {day.date}
                </Text>
                <Text className="text-xs font-medium text-secondary mt-1">
                  {day.day}
                </Text>
              </Squircle>
            ) : (
              <View className="px-2 py-2 items-center">
                <Text className="text-lg font-medium text-primary/40">
                  {day.date}
                </Text>
                <Text className="text-xs font-medium text-primary/30 mt-1">
                  {day.day}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const PlantCard = ({
  item,
  onPress,
}: {
  item: Plant;
  onPress?: () => void;
}) => (
  <Pressable onPress={onPress} className="flex-1">
    <Squircle
      className="bg-primary overflow-hidden rounded-3xl p-2"
      cornerSmoothing={1}
    >
      <Squircle
        className="overflow-hidden rounded-2xl w-full aspect-square"
        cornerSmoothing={1}
      >
        <Image
          source={{ uri: item.coverImg }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </Squircle>
      <View className="px-1 py-2">
        <Text variant="body-secondary" className="text-primary-foreground">
          {item.name}
        </Text>
      </View>
    </Squircle>
  </Pressable>
);

const ListHeader = () => (
  <>
    <HomeHeader />
    <View className="px-5 pb-4">
      <Text variant="subtitle" className="text-primary">
        Our Plants
      </Text>
    </View>
  </>
);

export default function Index() {
  const router = useRouter();

  return (
    <Screen>
      <FlatList
        data={customPlants}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlantCard
            item={item}
            onPress={() => router.push(`/plant/${item.id}`)}
          />
        )}
        ListHeaderComponent={ListHeader}
        columnWrapperClassName="gap-4 px-5"
        contentContainerClassName="gap-4 pb-8"
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
