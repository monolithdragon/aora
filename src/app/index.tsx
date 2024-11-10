import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl'>Aora!</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default index;
