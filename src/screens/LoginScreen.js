import React, { useContext, useState } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/Facebook Logo.svg';
import AppleSVG from '../assets/images/misc/Apple Logo.svg';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import Divider from '../components/Divider';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext)
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={true} />
      <View className="px-4 h-full gap-y-5 ">
        <View className="h-[200px] justify-center items-center">
          <View className="w-[91px] h-[91px] bg-[#d8d7d5] rounded-full justify-center items-center">
            <Text className="text-[18px] font-extrabold text-black">Logo</Text>
          </View>
        </View>
          <InputField label={'Email'} keyboardType="email-address" value={email} onChangeText={text => setEmail(text)} />
          <View>
          <InputField label={'Password'} inputType="password" value={password} onChangeText={text => setPassword(password)} />
          </View>
        <View>
        <CustomButton label={'Login'} onPress={() => {login()}} />
        </View>
          <Divider />
          <View className="flex-row justify-between"
            >
              <TouchableOpacity
              onPress={() => {}}
              className="bg-[#1877F2] w-[105px] h-[48px] rounded-md items-center justify-center"
              >
              <FacebookSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
             className="bg-white w-[105px] rounded-md items-center justify-center border border-zinc-100 shadow-sm shadow-black"
             >
              <GoogleSVG height={24} width={24} />
            </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => {}}
              className="bg-black w-[105px] rounded-md items-center justify-center"
              >
              <AppleSVG height={24} width={24} />
            </TouchableOpacity>
          </View>
          <View className="flex-row pt-2">
            <Text className="text-lg text-black ">Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-lg text-[#00ADB5]">
                {' '}
                Sign up here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
