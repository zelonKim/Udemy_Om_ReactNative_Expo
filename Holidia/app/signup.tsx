import { ActivityIndicator, Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import Header from '@/components/header';
import { useState } from 'react';
import { router } from 'expo-router';
import { PRIMARY } from '@/core/theme/colors';
import { client } from '@/core/api/client';
import useAuth from '@/core/auth';
import { toast } from '@/core/utils/toast';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { signIn, setUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    try {
      if (!email || !name || !password || !passwordConfirm) {
        console.log('All fields are required');
      }

      if (password !== passwordConfirm) {
        Alert.alert('비밀번호 불일치', '입력한 비밀번호가 일치하지 않습니다.');
        return;
      }

      setIsLoading(true);

      await client.post('/users', {
        name,
        email,
        password,
      });

      const loginResponse = await client.post<{ token: string }>('users/login', {
        email,
        password,
      });

      signIn({
        access: loginResponse.data.token,
      });

      setUser(email);

      setIsLoading(false);
      router.push('/');
      toast.success('🤗 Welcome to Holidia');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header title="Sign Up" />
      <View className="flex-column my-8 flex items-center justify-center">
        <Image
          source={require('assets/logo.png')}
          style={{ height: 40, width: 176 }}
          resizeMode="contain"
        />
        <Text variant="subtitle-primary" className="mt-4 text-center">
          Let`s get started
        </Text>
      </View>
      <TextInput
        className="mx-8 rounded-xl bg-gray-100 px-4 py-6 text-center"
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="mx-8 mt-6 rounded-xl bg-gray-100 px-4 py-6 text-center"
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
      <TextInput
        className="mx-8 mt-6 rounded-xl bg-gray-100 px-4 py-6 text-center"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={handleRegister}
        style={{ backgroundColor: PRIMARY, paddingVertical: 16, marginTop: 32, borderRadius: 16 }}
        className="mx-4 items-center ">
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text variant="button" className="text-center">
            회원가입
          </Text>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default Signup;
