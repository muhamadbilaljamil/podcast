import {View, Image, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PlayListCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')} key={item.id}>
      <View className="relative mx-3  bg-gray mb-5 bg-white rounded-[10px] overflow-hidden shadow-sm shadow-gray-400">
        <View className="flex-row">
          <View className="relative">
            <View className="w-10 h-10 absolute z-10 top-[33px] left-[50px]  rounded-full bg-[#00ADB5] justify-center items-center">
              <Ionicons name="caret-forward" size={24} color="#FFF" />
            </View>
            <Image className="h-[105px] w-[140px]" source={item.thumbnail} />
          </View>
          <View className="justify-center ml-5">
            <Text className="text-base text-black font-bold mb-2">{item.title}</Text>
            <View className="flex-row gap-[13px]  items-center mb-2">
              <Ionicons name="volume-medium-outline" size={15} color="#000" />
              <Text className="text-black text-[10px] font-semibold">
                {item.episodes}
              </Text>
            </View>
            <View className="flex-row gap-[13px] items-center">
              <Ionicons name="time-outline" size={15} color="#000" />
              <Text className="text-black text-[10px] font-semibold">
                {item.duration}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlayListCard;
