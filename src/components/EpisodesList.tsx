import * as React from 'react';
import { View, FlatList } from 'react-native';
import { ListHeader, EpisodeCard } from './';
import { episodesList } from '../model/data';
import { windowHeight } from '../utils/Dimensions';

const EpisodesList = ({ handleModalOpen }) => {

  const height = Math.round(windowHeight - 550);
  return <View className="relative w-full bg-white">
    <ListHeader title='Episodes' titleClass='text-lg font-semibold' />
    <View style={{ height: height }}>
      <FlatList
        data={episodesList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <EpisodeCard item={item} handleModalOpen={handleModalOpen} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </View>
}

export default EpisodesList;

