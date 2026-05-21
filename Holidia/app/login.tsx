import { ActivityIndicator, Image, TextInput, TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import Header from '@/components/header';
import { useState } from 'react';
import { router } from 'expo-router';
import { PRIMARY } from '@/core/theme/colors';
import { client } from '@/core/api/client';
import useAuth from '@/core/auth';
import { toast } from '@/core/utils/toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, setUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const response = await client.post('/users/login', {
        email,
        password,
      });

      signIn({
        access: response.data.token,
      });

      setUser(email);

      toast.success('🤗 Welcome to Holidia');
      setIsLoading(false);
      router.push('/');
      
    } catch (err: any) {
      console.log(err.response?.data);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header title="Log in" />
      <View className="flex-column mt-8 flex items-center justify-center">
        <Image
          source={require('assets/logo.png')}
          style={{ height: 40, width: 176 }}
          resizeMode="contain"
        />
        <Text variant="subtitle-primary" className="mt-2 text-center">
          Welcome Back
        </Text>
      </View>

      <TextInput
        className="mx-8 mt-10 rounded-xl bg-gray-100 px-4 py-6 text-center"
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        className="mx-8 mt-6 rounded-xl bg-gray-100 px-4 py-6 text-center"
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={handleSignIn}
        style={{ backgroundColor: PRIMARY, paddingVertical: 16, marginTop: 24, borderRadius: 16 }}
        className="mx-4 items-center ">
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text variant="button" className="text-center">
            로그인
          </Text>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
