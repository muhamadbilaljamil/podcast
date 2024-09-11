import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DetailCover, EpisodesList, PodcastInfo, PodcastPlayer} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [modalType, setModalType] = useState(1);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleModalOpen = useCallback((modalType:number) => {
    setModalType(modalType)
    bottomSheetModalRef.current?.present();
    console.log(modalType)
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView>
      <DetailCover handleModalOpen={handleModalOpen} />
      <EpisodesList handleModalOpen={handleModalOpen} />
      <View className="absolute -bottom-1 left-0 right-0">
        <View className="relative bg-[#5B7083] border-b-[0.75px] border-[#CED5DC] py-3">
          <View className="flex-row px-3 items-center justify-between">
            <View className="flex-row items-center">
              <Image
                className="h-[35px] w-[35px] rounded-[3px]"
                source={require('../assets/images/placeholder.png')}
              />
              <View className="justify-center ml-[12px]">
                <Text className="text-sm text-white font-semibold mb-[6px]">
                  Episode name goes here
                </Text>
              </View>
            </View>
            <View className="w-10 h-10 rounded-full border-white border-2 justify-center items-center">
              <Ionicons name="pause-sharp" size={20} color="#FFF" />
            </View>
          </View>
        </View>
      </View>
      <BottomSheetModalProvider>
        <View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={modalType}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <BottomSheetView className="flex-1">
              {
                modalType === 1 ?  <PodcastInfo /> :<PodcastPlayer />
              }
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default DetailScreen;



