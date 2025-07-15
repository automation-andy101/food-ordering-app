import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SignIn = () => {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput 
        placeholder='Enter your email'
        value={''}
        onChangeText={() => {}}
        label='Email'
        keyboardType='email-address'
      />

      <CustomInput 
        placeholder='Enter your password'
        value={''}
        onChangeText={() => {}}
        label='Password'
        secureTextEntry={true}
      />

      <CustomButton 
        title='Sign In'
      />

      <View>
        <Text className='base-regular text-gray-100'>
          Don't have an account?
        </Text>
        <Link href="/sign-up" className='base-bold text-primary'>
          Sign Up
        </Link>
      </View>
    </View>
  )
}

export default SignIn