import React from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardTypeOptions } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface InputFieldProps {
  label: string;
  icon?: React.ReactNode;
  inputType?: 'text' | 'password';
  keyboardType?: KeyboardTypeOptions;
  fieldButtonLabel?: string;
  fieldButtonFunction?: () => void;
  value:string;
  onChangeText: (value:string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  inputType = 'text',
  keyboardType = 'default',
  fieldButtonLabel,
  fieldButtonFunction,
  value, 
  onChangeText
}) => {
  return (
    <View>
      <Text className="text-lg font-semibold text-black mb-1">{label}</Text>
      <View>
        {icon && <View>{icon}</View>}
        <View className="border border-[#B3B3B3]  rounded-md h-12">
          <TextInput
            keyboardType={keyboardType}
            secureTextEntry={inputType === 'password'}
            value={value}
            onChangeText={onChangeText}
          />
        </View>

        {fieldButtonLabel && fieldButtonFunction && (
          <TouchableOpacity onPress={fieldButtonFunction}>
            <Text>{fieldButtonLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
