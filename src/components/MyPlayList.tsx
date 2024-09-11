import React from 'react';
import { View, FlatList } from 'react-native';
import ListHeader from './ListHeader';
import { myPlayList } from '../model/data';
import PlayListCard from './PlayListCard';
import { windowHeight } from '../utils/Dimensions';

const MyPlayList = () => {
  const height = Math.round(windowHeight - 560);
  return (
    <View>
      <ListHeader title="My PlayList" viewMore="View more" />
      <View style={{ height: height }}  >
        <FlatList
          data={myPlayList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <PlayListCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MyPlayList;

