import ContentPageIndicator from '@/components/ContentPageIndicator';
import CustomTextInput from '@/components/CustomTextInput';
import Pagination from '@/components/Pagination';
import HomePageContent from '@/contents/homePageContent';
import { loadCharacters, setCharacterSearchTerm } from '@/store/actions/characterActions';
import { loadEpisodes, setEpisodeSearchTerm } from '@/store/actions/episodeActions';
import { useAppSelector } from '@/store/store';
import theme from '@/styles/theme';
import { ITheme } from '@/styles/types';

import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  const episode = useAppSelector(state => state.episode);
  const character = useAppSelector(state => state.character);

  const page = useAppSelector(state => state.appConfig.contentPage);
  const currentPage = page === 0 ? episode.currentPage : character.currentPage;
  const totalPages = page === 0 ? episode.totalPages : character.totalPages;
  const load = (e: number) => (page === 0 ? loadEpisodes(e) : loadCharacters(e));
  const setSearchTerm = (term: string) =>
    page === 0 ? setEpisodeSearchTerm(term) : setCharacterSearchTerm(term);
  const searchTerm = page === 0 ? episode.searchTerm : character.searchTerm;

  return (
    <View style={style.container}>
      <CustomTextInput onChange={e => setSearchTerm(e)} searchTerm={searchTerm} />

      <ContentPageIndicator page={page} />

      <HomePageContent />

      <View style={style.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPress={(e: number) => {
            load(e);
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
