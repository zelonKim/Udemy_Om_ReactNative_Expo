import { withUniwind } from "uniwind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SafeAreaView = withUniwind(RNSafeAreaView);

interface ScreenProps {
  children: ReactNode;
  className?: string;
}

export const Screen = ({ children, className }: ScreenProps) => {
  return (
    <SafeAreaView className={twMerge("flex-1 bg-background", className)}>
      {children}
    </SafeAreaView>
  );
};
