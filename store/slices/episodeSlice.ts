import { createSlice } from '@reduxjs/toolkit';

import { IEpisode } from '../types';

interface EpisodeState {
  episodes: IEpisode[];
  currentPage: number | null;
  totalPages: number | null;
}

const initialState: EpisodeState = {
  episodes: [],
  currentPage: null,
  totalPages: null,
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
  },
});

export const { setEpisodes, setCurrentPage, setTotalPages } = episodeSlice.actions;

export default episodeSlice.reducer;
