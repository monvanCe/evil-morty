import { setContentPage } from '@/store/actions/appConfigActions';
import { useAppSelector } from '@/store/store';
import { verticalScale } from '@/styles/metricEngine';
import { paddings, sizes } from '@/styles/sizes';

import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';

import CharactersContent from '../charactersContent';
import EpisodesContent from '../episodesContent';

const { width } = Dimensions.get('window');

export default function HomePageContent() {
  const paginatorRef = React.useRef<FlatList<any> | null>(null);
  const page = useAppSelector(state => state.appConfig.contentPage);
  const renderItem = ({ item }: { item: any }) => {
    return <View style={[style.page, { width }]}>{item}</View>;
  };

  React.useEffect(() => {
    paginatorRef.current?.scrollToIndex({ index: page, animated: true });
  }, [page]);

  return (
    <FlatList
      data={[<EpisodesContent key='episodes' />, <CharactersContent key='characters' />]}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      ref={paginatorRef}
      onMomentumScrollEnd={e => {
        const index = Math.floor(e.nativeEvent.contentOffset.x / width);
        setContentPage(index);
      }}
      onScrollToIndexFailed={() => {
        console.log('onScrollToIndexFailed');
      }}
    />
  );
}

const style = {
  page: {
    paddingBottom: verticalScale(sizes.medium + 2 * paddings.small),
    flex: 1,
  },
};
