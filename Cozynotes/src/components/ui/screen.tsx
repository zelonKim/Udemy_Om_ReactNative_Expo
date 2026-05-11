import { withUniwind } from 'uniwind';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

const SafeAreaView = withUniwind(RNSafeAreaView);

interface ScreenProps {
  children: ReactNode;
  className?: string;
}

const Screen = ({
  children,
  className = 'flex-1',
}: ScreenProps) => {
  return <SafeAreaView className={className}>{children}</SafeAreaView>;
};

export default Screen;

