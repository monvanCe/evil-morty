import { episodeStatus } from '@/utils/enums';

import { createSlice } from '@reduxjs/toolkit';

import { IEpisode } from '../types';

interface EpisodeState {
  episodes: IEpisode[];
  currentPage: number | null;
  totalPages: number | null;
  status: episodeStatus | null;
  searchTerm: string;
}

const initialState: EpisodeState = {
  episodes: [],
  currentPage: null,
  totalPages: null,
  status: null,
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
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setEpisodes, setCurrentPage, setTotalPages, setStatus, setSearchTerm } =
  episodeSlice.actions;

export default episodeSlice.reducer;
