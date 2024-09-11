import {View, Image, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const EpisodeCard = ({item, handleModalOpen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => handleModalOpen(2)}
      key={item.id}>
      <View className="relative bg-white border-b-[0.75px] border-[#CED5DC] py-3">
        <View className="flex-row px-3 items-center justify-between">
          <View className="flex-row items-center">
            <Image className="h-[35px] w-[35px] rounded-[3px]" source={item.thumbnail} />
            <View className="justify-center ml-[12px]">
            <Text className="text-sm text-black font-semibold mb-[6px]">
              {item.title}
            </Text>
            <View className="flex-row gap-[13px]  items-center mb-1">
              <Text className="text-[#696969] text-xs font-semibold">
                {item.by}
              </Text>
              <View className="w-[2px] h-[2px] bg-black rounded-full"></View>
              <Text className="text-[#696969] text-xs font-semibold">
                {item.duration}
              </Text>
            </View>
          </View>
          </View>
          
          <View className="w-10 h-10 rounded-full bg-[#00ADB5] justify-center items-center">
            <Ionicons name="caret-forward" size={24} color="#FFF" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
