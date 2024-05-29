import Pagination from '@/components/Pagination';
import HomeLayout from '@/layout/homeLayout';
import { loadEpisodes } from '@/store/actions/episodeActions';
import { useAppSelector } from '@/store/store';
import theme from '@/styles/theme';
import { ITheme } from '@/styles/types';

import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);
  const episode = useAppSelector(state => state.episode);
  const { currentPage, totalPages } = episode;

  return (
    <View style={style.container}>
      <HomeLayout />

      <View style={style.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPress={(e: number) => {
            loadEpisodes(e);
          }}
        />
      </View>
    </View>
  );
}

const styles = (colors: ITheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    paginationContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: colors.background,
    },
  });
};
