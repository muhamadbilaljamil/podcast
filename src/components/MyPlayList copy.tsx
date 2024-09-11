import React from 'react';
import {View, FlatList, ScrollView } from 'react-native';
import ListHeader from './ListHeader';
import { myPlayList } from '../model/data';
import PlayListCard from './PlayListCard';

const MyPlayList = () => {
  return (
      <View>
        <ListHeader title="My PlayList" viewMore="View more" />
        <View className="h-[320px] pb-[100px]">
        <FlatList 
            data={myPlayList}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PlayListCard item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
  );
};

export default MyPlayList;

