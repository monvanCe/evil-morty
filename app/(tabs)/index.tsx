import EpisodeItem from '@/components/EpisodeItem';
import { useAppSelector } from '@/store/store';
import theme from '@/styles/theme';

import React from 'react';
import { FlatList, View } from 'react-native';

export default function HomeScreen() {
  const colors = theme.useTheme();
  const episode = useAppSelector(state => state.episode);
  const { episodes, currentPage, totalPages } = episode;

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <FlatList
        data={episodes}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        renderItem={({ item, index }) => <EpisodeItem item={item} index={index} />}
      />
    </View>
  );
}
