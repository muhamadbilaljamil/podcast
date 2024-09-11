import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      className="bg-black h-[48px] items-center justify-center rounded-md mt-4"
      onPress={onPress}>
      <Text className="text-white text-lg font-extrabold">{label}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;