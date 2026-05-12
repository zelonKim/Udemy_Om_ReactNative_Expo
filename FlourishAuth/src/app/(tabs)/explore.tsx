import { View } from "react-native";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";

export default function Explore() {
  return (
    <Screen>
      <View className="px-5 pt-4 pb-4">
        <Text variant="display" className="text-primary">
          Explore
        </Text>
        <Text className="text-muted-foreground mt-2">
          Build this screen to browse plants by category
        </Text>
      </View>
    </Screen>
  );
}
