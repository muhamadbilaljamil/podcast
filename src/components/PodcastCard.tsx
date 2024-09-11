import {View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PodcastCard = ({item}) =>{
  const navigation = useNavigation();
    return    <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
    <View className="ml-[10px] relative w-[275px] h-[275px] bg-white shadow-sm shadow-gray-800 rounded-md overflow-hidden">
    <Text className="px-8 pt-[4px] h-[25px] bg-[#00ADB5] text-white absolute top-2 right-2 z-20 rounded-[4px] text-xs font-semibold">
      {item.tag}
    </Text>
    <Image
      className="h-[125px] aspect-[5/2]"
      source={item.thumbnail}
    />
    <View className="p-6">
      <Text className="text-lg text-black font-bold">
        {item.title}
      </Text>
      <View className="flex-row gap-3 py-3 items-center">
      <Ionicons name="volume-medium-outline" size={20} color="#000" />
        <Text className="text-black text-xs font-semibold">
          {item.episodes}
        </Text>
      </View>
      <View className="flex-row gap-3 items-center">
      <Ionicons name="time-outline" size={20} color="#000" />
        <Text className="text-black text-xs font-semibold">
          {item.duration}
        </Text>
      </View>
    </View>
  </View>
  </TouchableOpacity>
}

export default PodcastCard;