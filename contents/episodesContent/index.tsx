import EpisodeItem from '@/components/EpisodeItem';
import EpisodeSkeleton from '@/components/SkeletonItem';
import { setContentPage } from '@/store/actions/appConfigActions';
import { loadCharactersByIds } from '@/store/actions/characterActions';
import { useAppSelector } from '@/store/store';
import { horizontalScale } from '@/styles/metricEngine';
import { paddings } from '@/styles/sizes';
import { status } from '@/utils/enums';

import React from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

export default function EpisodesContent() {
  const episode = useAppSelector(state => state.episode);
  const { episodes, episodeStatus, searchTerm } = episode;

  const filteredEpisodes = React.useMemo(() => {
    return episodes.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.episode.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [episodes, searchTerm]);

  return (
    <>
      {episodeStatus === status.Loading ? (
        <>
          {Array.from({ length: 15 }, (_, index) => (
            <View key={index} style={{ padding: horizontalScale(paddings.small) }}>
              <EpisodeSkeleton />
            </View>
          ))}
        </>
      ) : (
        <FlashList
          data={filteredEpisodes}
          contentContainerStyle={{
            paddingHorizontal: horizontalScale(paddings.small),
          }}
          estimatedItemSize={50}
          renderItem={({ item, index }) => (
            <EpisodeItem
              item={item}
              index={index}
              onPress={(e: any) => {
                loadCharactersByIds(episodes[index].characters.map(item => item.id));
                setContentPage(1);
              }}
            />
          )}
        />
      )}
    </>
  );
}
