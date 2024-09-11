import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from '@rneui/themed';
import { twMerge } from 'tailwind-merge';

interface DividerWithLabelProps {
  label: string;
  className?: string;
  labelClass?: string;
}

const DividerWithLabel: React.FC<DividerWithLabelProps> = ({
  label,
  className,
  labelClass
}) => {
  return (
    <View className={twMerge('mt-12 mb-6',className)}>
       <Divider />
       <Text  className={twMerge(`w-32 text-center bg-white absolute -top-[10px] left-[30%] font-extrabold `,labelClass)}>OR</Text>
    </View>
  );
};

export default DividerWithLabel;