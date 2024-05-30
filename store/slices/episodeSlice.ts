import { status } from '@/utils/enums';

import { createSlice } from '@reduxjs/toolkit';

import { IEpisode } from '../types';

interface EpisodeState {
  episodes: IEpisode[];
  currentPage: number | null;
  totalPages: number | null;
  episodeStatus: status | null;
  searchTerm: string;
}

const initialState: EpisodeState = {
  episodes: [],
  currentPage: null,
  totalPages: null,
  episodeStatus: null,
  searchTerm: '',
};

export const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setEpisodeStatus: (state, action) => {
      state.episodeStatus = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setEpisodes, setCurrentPage, setTotalPages, setEpisodeStatus, setSearchTerm } =
  episodeSlice.actions;

export default episodeSlice.reducer;
