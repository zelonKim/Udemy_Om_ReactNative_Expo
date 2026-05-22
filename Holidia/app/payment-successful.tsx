import { Linking, TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useRef, useState } from 'react';
import { registerForPushNotificationsAsync } from '@/core/services/notifications';
import axios from 'axios';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const PaymentSuccessful = () => {
  const [notifications, setNotifications] = useState<Notifications.Notification>();

  const notificationsListener = useRef<Notifications.EventSubscription | null>(null);
  const responseListener = useRef<Notifications.EventSubscription | null>(null);

  useEffect(() => {
    const payNotification = async () => {
      const token = await registerForPushNotificationsAsync();

      if (token) {
        await axios.post('https://holidiaapis-production.up.railway.app/users/notification', {
          pushToken: token,
          contents: {
            title: '결제 성공 ✅ ',
            body: '정상적으로 결제가 완료되었습니다.',
            message: '홀리디아를 이용해주셔서 감사합니다.',
          },
        });
      }
    };

    payNotification();

    notificationsListener.current = Notifications.addNotificationReceivedListener(// 푸시 알림이 도착하는 순간 실행됨.
      (notification) => {
        console.log(notification);
        setNotifications(notification);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
    // 도착한 푸시 알림을 눌렀을 때 실행됨.
      console.log(response);
      Linking.openURL('holidia://bookings'); 
      // Linking.openURL('https://www.agoda.com'); 
    });

    return () => {
      notificationsListener.current?.remove();
      responseListener.current?.remove();
    };
  }, []);

  return (
    <Container>
      <View className="flex-1 items-center justify-center p-5">
        <MotiView
          from={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            duration: 2000,
            scale: {
              damping: 12,
              stiffness: 100,
            },
          }}>
          <View className="flex h-24 w-24 flex-row items-center justify-center rounded-full bg-green-100">
            <View className="h-20 w-20 items-center justify-center rounded-full bg-green-600">
              <Ionicons name="checkmark" size={40} color={'white'} />
            </View>
          </View>
        </MotiView>

        <Text variant="display" className="my-4 text-center">
          Paid Successfully
        </Text>
        <Text variant="body" className="my-4 mb-10 text-center text-gray-600">
          Your booking has been confirmed.
        </Text>

        <View className="flex flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              router.push('/(tabs)/bookings');
            }}
            style={{ backgroundColor: 'green', paddingVertical: 16, borderRadius: 16 }}
            className="w-full">
            <Text variant="button" className="text-center">
              View my Bookings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default PaymentSuccessful;
