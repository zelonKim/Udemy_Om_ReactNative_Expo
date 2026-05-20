import { View } from 'react-native';

import Text from '@/components/text';
import Container from '@/components/Container';
import { useEffect } from 'react';
import { router } from 'expo-router';

const PaymentSuccessful = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  
  
  return (
    <Container>
      <View className="flex-column flex items-center justify-center">
        <Text variant="subtitle-primary">Thank you 😊</Text>
        <Text variant="body-primary">You Paid Successfully 🧾</Text>
      </View>
    </Container>
  );
};

export default PaymentSuccessful;
