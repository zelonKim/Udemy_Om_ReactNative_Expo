import { View } from "react-native";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";

export default function Search() {
  
  return (
    <Screen>
      <View className="px-5 pt-4">
        <Text variant="display" className="text-primary">
          Search
        </Text>
        <Text className="text-muted-foreground mt-2">
          Build this screen to search for plants
        </Text>
      </View>
    </Screen>
  );
}

