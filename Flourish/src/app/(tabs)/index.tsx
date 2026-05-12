import { format } from "date-fns";
import { FlatList, Image,  View } from "react-native";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { customPlants } from "~/lib/constants";
import { getWeekDays } from "~/lib/utils";



type PlantCardProps = {
  item: Plant;
  onPress?: () => void;
};

const PlantCard = ({ item, onPress }: PlantCardProps) => {
  return (
    <View className="flex-1">
      <View className="bg-green-800 overflow-hidden rounded-3xl p-2">
        <View className="overflow-hidden rounded-2xl w-full aspect-square">
          <Image
            source={{ uri: item.coverImg }}
            className="w-full h-full aspect-square"
          />
        </View>
        <View className="px-1 py-2">
          <Text variant="body-secondary" className="text-white text-sm">
            {item.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const now = new Date();
const weekDays = getWeekDays(now);

const HomeHeader = () => {
  return (
    <View className="px-5 py-4">
      <View className="flex-row justify-between items-start mb-5">
        <View className="flex-row items-center gap-2">
          <Text variant="display">{format(now, "EEE")}</Text>
          <View className="w-4 h-4 rounded-full bg-accent"></View>
        </View>
        <View className="items-end">
          <Text variant="subtitle">{format(now, "MMM d")}</Text>
          <Text>{format(now, "yyyy")}</Text>
        </View>
      </View>

      <View className="flex-row justify-between">
        {weekDays.map((day, index) => (
          <View key={index} className="items-center">
            {day.isToday ? (
              <View className="bg-green-800 p-2 items-center rounded-xl">
                <Text variant="subtitle-secondary">{day.date}</Text>
                <Text variant="caption">{day.day}</Text>
              </View>
            ) : (
              <View className="p-2 items-center">
                <Text variant="subtitle" className="text-primary/40">
                  {day.date}
                </Text>
                <Text variant="caption" className="text-primary/30">
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

const Home = () => {
  return (
    <Screen>
      <FlatList
        data={customPlants}
        renderItem={({ item }) => <PlantCard item={item} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerClassName="gap-4 pb-8"
        columnWrapperClassName="gap-4 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HomeHeader}
      />
    </Screen>
  );
};

export default Home;
