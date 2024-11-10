import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  onPress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
};

export default function Button({
  title,
  onPress,
  containerStyle,
  textStyle,
  isLoading,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`items-center justify-center bg-secondary rounded-xl min-h-16 ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}>
      <Text className={`text-lg text-primary font-poppins-semiBold ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
}
