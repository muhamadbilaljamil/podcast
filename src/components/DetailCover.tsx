import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface DetailCoverProps {
  handleModalOpen: (value:number) => void;
}

const DetailCover = ({handleModalOpen}:DetailCoverProps) => {
    const navigation = useNavigation();
    return <View className="relative w-full">
    <ImageBackground source={require('../assets/images/thumbnail.png')}>
      <View className="relative w-full h-[310px]">
        <View className="absolute top-0 bottom-0 left-0 right-0 bg-[#00000070]" />
        <View className="flex-row justify-between pt-4 px-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleModalOpen(1)}>
            <Ionicons
              name="information-circle-outline"
              size={30}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-1 mt-[88px] items-center">
          <Text className="text-white text-[30px] font-semibold">Podcast name</Text>
          <Text className="text-white text-sm font-semibold">A podcast to know better your greens</Text>
          <TouchableOpacity className="bg-[#00ADB5] mt-7 rounded-md w-[210px] h-12 justify-center items-center">
            <Text className="text-white text-[15px] font-extrabold">Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    <View className="h-[78px] flex-row items-center justify-between px-4 border-b-2 border-gray-200">
        <InfoIconText label="Available for your tier" icon="thumbs-up-outline"/>
        <InfoIconText label="20 Episodes" icon="volume-medium-outline"/>
        <InfoIconText label="1h 30 min" icon="time-outline"/>
    </View>
  </View>
}

export default DetailCover;

const InfoIconText = ({label, icon}) => {
    return <View className="flex-row items-center gap-2">
    <Ionicons name={icon} size={18} color="#000" />
        <Text className="text-black text-xs font-semibold">{label}</Text>
    </View>
}