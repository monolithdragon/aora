import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Logo, Cards, Path } from '@/constants/images';
import Button from '@/components/button';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center justify-center w-full min-h-[85vh] px-4'>
          <Image
            source={Logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={Cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Discover Endless Possibilities with <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={Path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm text-center text-gray-100 font-poppins-regular mt-7'>
            Where creativity meets innovation: embark on a jurney of limitless exploration with Aora
          </Text>
          <Button
            title='Continue with Email'
            onPress={() => router.push('/sign-in')}
            containerStyle='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
  );
}
