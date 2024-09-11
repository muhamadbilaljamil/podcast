import * as React from 'react';
import { View, Image } from 'react-native';
import { PodcastList, MyPlayList } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-3">
        <Image
          className="w-[45px] h-[45px] my-2 mx-3"
          source={require('../assets/images/profile.png')}
        />
        <PodcastList />
        <MyPlayList />
      </View>
    </SafeAreaView>

  );
};

export default HomeScreen;
