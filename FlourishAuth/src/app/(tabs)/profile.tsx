import { Pressable, View } from "react-native";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import useAuth from "~/lib/stores/auth";

export default function Profile() {
  const { logout } = useAuth();

  return (
    <Screen>
      <View className="px-5 pt-4">
        <Text variant="display" className="text-primary">
          Profile
        </Text>
        <Pressable
          className="flex-row mt-6 items-center justify-center bg-primary rounded-2xl p-2"
          onPress={logout}
        >
          <Text variant="button">로그아웃</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
