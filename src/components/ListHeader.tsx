import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ListHeaderProps {
    title:string;
    viewMore?:string;
    titleClass?: string;
}

const ListHeader = ({title, viewMore, titleClass}:ListHeaderProps) => {
    return <View className="flex-row justify-between items-center my-6 mx-3">
    <Text className={twMerge("text-xl font-bold text-black", titleClass)}>{title}</Text>
    <Text className="text-[#00478E] font-semibold text-sm">{viewMore}</Text>
  </View>
}

export default ListHeader;