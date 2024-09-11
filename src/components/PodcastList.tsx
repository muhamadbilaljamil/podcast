import React from 'react';
import {View, FlatList } from 'react-native';
import ListHeader from './ListHeader';
import { podcasts } from '../model/data';
import PodcastCard from './PodcastCard';

const PodcastList = () => {
  return (
      <View>
        <ListHeader title="All podcasts" viewMore="View more" />
          <FlatList 
            data={podcasts}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PodcastCard item={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
      </View>
   
  );
};

export default PodcastList;
