import { FlatList, Image, Pressable, ScrollView, View } from "react-native";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { customPlants } from "~/lib/constants";
import { categories } from "~/lib/constants/categories";
import Ionicons from "@expo/vector-icons/Ionicons";

type ExploreCardProps = {
  item: Plant;
};

const ExploreCard = ({ item }: ExploreCardProps) => {
  return (
    <Pressable className="mx-5">
      <View className="overflow-hidden rounded-2xl bg-green-800">
        <Image
          source={{ uri: item.coverImg }}
          className="w-full h-48"
          resizeMode="cover"
        />

        <View className="p-5">
          <Text variant="subtitle-secondary">{item.price} $</Text>
          <Text variant="caption">{item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};



const ListHeader = () => {
  return (
    <>
      <View className="px-5 pt-4 pb-4">
        <Text variant="display" className="text-primary">
          둘러보기
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-5 gap-2 pb-4"
      >
        {categories.map((category) => (
          <Pressable key={category.id}>
            <View className="flex-row bg-green-800 items-center gap-2 px-3 py-2 rounded-2xl">
              <Ionicons
                name={category.icon as any}
                size={24}
                color={category.bgColor}
              />
              <Text variant="caption-primary" className="text-white">
                {category.label}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
};



const Explore = () => {
  return (
    <Screen>
      <FlatList
        data={customPlants}
        renderItem={({ item }) => <ExploreCard item={item} />}
        contentContainerClassName="pb-8 gap-5 pt-2"
        ListHeaderComponent={ListHeader}
      />
    </Screen>
  );
};

export default Explore;
