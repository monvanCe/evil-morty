import service from '@/service';
import { episodeStatus } from '@/utils/enums';

import { setEpisodes, setSearchTerm, setStatus } from '../slices/episodeSlice';
import { setCurrentPage } from '../slices/episodeSlice';
import { setTotalPages } from '../slices/episodeSlice';
import { store } from '../store';

export const loadInitialEpisodes = async () => {
  const episodes = await service.getEpisodes();
  const dispatch = store.dispatch;

  dispatch(setCurrentPage(1));
  dispatch(setTotalPages(episodes.info.pages));
  dispatch(setEpisodes(episodes.results));
  dispatch(setStatus(episodeStatus.Success));
};

export const loadEpisodes = async (page: number) => {
  const dispatch = store.dispatch;
  dispatch(setCurrentPage(page));
  dispatch(setStatus(episodeStatus.Loading));

  const episodes = await service.getEpisodes(page);
  dispatch(setEpisodes(episodes.results));
  dispatch(setStatus(episodeStatus.Success));
};

export const setEpisodeSearchTerm = async (searchTerm: string) => {
  const dispatch = store.dispatch;
  dispatch(setSearchTerm(searchTerm));
};
