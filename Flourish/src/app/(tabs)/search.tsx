import { Screen } from "~/components/ui/screen";
import { TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCSSVariable } from "uniwind";

const Search = () => {
  const [mutedColor] = useCSSVariable(["--color-muted-foreground"]);

  return (
    <Screen>
      <View className="px-5 pt-4">
        <View className="flex-row items-center bg-green-50 rounded-2xl px-4 py-2 gap-2">
          <Ionicons name="search" size={20} />
          <TextInput
            placeholder="원하는 식물을 검색해보세요."
            placeholderTextColor={mutedColor as string}
          />
        </View>
      </View>
    </Screen>
  );
};

export default Search;
