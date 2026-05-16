import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import Header from '@/components/header';
import { useState } from 'react';
import { router } from 'expo-router';
import { PRIMARY } from '@/core/theme/colors';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        className="mx-8 mt-6 rounded-xl bg-gray-100 px-32 py-6 text-center"
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        className="mx-8 mt-6 rounded-xl bg-gray-100 px-32 py-6 text-center"
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          router.push('/');
        }}
        style={{ backgroundColor: PRIMARY, paddingVertical: 16, marginTop: 32, borderRadius: 16 }}
        className="mx-4 items-center ">
        <Text variant="button" className="text-center">
          회원가입
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Signup;
