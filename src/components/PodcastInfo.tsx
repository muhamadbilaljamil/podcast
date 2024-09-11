import * as React from 'react';
import {Text, View} from 'react-native';

const PodcastInfo = () => {

  return (
    <View className="p-6">
      <View className="flex-row justify-between">
        <View className="w-[140px] h-[30px] bg-[#00ADB5] justify-center items-center rounded">
          <Text className="text-white text-base font-bold">Healthy food</Text>
        </View>
      </View>
      <Text className="text-[24px] text-black font-bold py-5">
        About this podcast
      </Text>
      <Text className="text-black text-base text-justify font-semibold">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{' '}
      </Text>
    </View>
  );
};

export default PodcastInfo;
