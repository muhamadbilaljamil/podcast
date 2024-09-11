import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SeekBar from './SeekBar';

const PodcastPlayer = () => {
  return (
    <View className="p-6">
      <View className="items-center">
        <Image
          source={require('../assets/images/placeholder.png')}
          className="w-full h-[250px] items-center"
        />
      </View>
      <Text className="text-base text-center text-[#5B7083] font-bold mt-7">
        Episode Name Goes here
      </Text>
      <Text className="text-[#A1A1A1] text-center text-sm">By XYZ</Text>
      <View className=" flex-row justify-between items-center mt-12">
        <View >
          <Text className="absolute top-[11px] left-[9px] text-[8px]">10</Text>
          <View className="scale-x-flip">
            <Ionicons name="refresh-outline" size={28} color="#5B7083" />
          </View>
        </View>
        <View className="w-[72px] h-[72px] rounded-full bg-[#00ADB5] justify-center items-center">
          <Ionicons name="caret-forward" size={44} color="#FFF" />
        </View>
        <View>
          <Text className="absolute top-[11px] left-[10px] text-[8px]">30</Text>
          <Ionicons name="refresh-outline" size={28} color="#5B7083" />
        </View>
      </View>
      <View className="justify-between items-center mt-12">
        <SeekBar />
      </View>
      <View className="flex-row justify-between items-center mt-1">
        <Text>01:10</Text>
        <Text>03:30</Text>
      </View>
    </View >
  );
};

export default PodcastPlayer;
