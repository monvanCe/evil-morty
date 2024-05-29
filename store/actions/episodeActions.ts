import service from '@/service';

import { setEpisodes } from '../slices/episodeSlice';
import { setCurrentPage } from '../slices/episodeSlice';
import { setTotalPages } from '../slices/episodeSlice';
import { store } from '../store';

export const loadInitialEpisodes = async () => {
  const episodes = await service.getEpisodes();
  const dispatch = store.dispatch;

  dispatch(setCurrentPage(1));
  dispatch(setTotalPages(episodes.info.pages));
  dispatch(setEpisodes(episodes.results));
};
