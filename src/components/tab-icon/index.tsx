import { View, Image, Text } from 'react-native';
import React from 'react';

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};

export default function TabIcon({ icon, color, name, focused }: TabIconProps) {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text
        className={`text-xs ${focused ? 'font-poppins-semiBold' : 'font-poppins-regular'}`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
}
