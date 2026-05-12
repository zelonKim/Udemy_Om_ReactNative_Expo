import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { Pressable, TextInput, View } from "react-native";
import { useCSSVariable } from "uniwind";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import useAuth from "~/lib/stores/auth";

export default function SignIn() {
  const [colorPrimary, mutedForeground] = useCSSVariable([
    "--color-primary",
    "--color-muted-foreground",
  ]);

  const { login } = useAuth();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1 px-6 gap-5 justify-center">
        <Pressable
          onPress={() => {
            router.back();
          }}
          className="mb-8"
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color={colorPrimary as string}
          />
        </Pressable>

        <Text variant="display" className="text-primary ">
          Sign In
        </Text>

        <View className="gap-5">
          <View className="gpa-2">
            <Text className="text-primary font-medium">Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={mutedForeground as string}
              className="bg-muted/50 px-5 py-4 rounded-2xl text-foreground text-base"
            />
          </View>
        </View>
        
        <View className="gap-5">
          <View className="gpa-2">
            <Text className="text-primary font-medium">Password</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={mutedForeground as string}
              className="bg-muted/50 px-5 py-4 rounded-2xl text-foreground text-base"
              secureTextEntry={true}
            />
          </View>
        </View>

        <Pressable
          onPress={login}
          className="bg-green-800 py-4 px-6 rounded-2xl"
        >
          <Text variant="button">로그인</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/(auth)/sign-up");
          }}
        >
          <Text className="text-center">
            혹시 처음 방문하셨나요? {"  "}
            <Text className="text-primary font-semibold">회원가입</Text>
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}
