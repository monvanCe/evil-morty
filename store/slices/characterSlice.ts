import { storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import { createSlice } from '@reduxjs/toolkit';

import { ICharacter } from '../types';

interface CharacterState {
  characters: ICharacter[];
  currentPage: number | null;
  totalPages: number | null;
  favoriteCharacters: ICharacter[];
}

const initialState: CharacterState = {
  characters: [],
  currentPage: null,
  totalPages: null,
  favoriteCharacters: [],
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setFavoriteCharacters: (state, action) => {
      state.favoriteCharacters = action.payload;
      storage.setItem(storageKeys.FavoriteCharacters, action.payload);
    },
  },
});

export const { setCharacters, setCurrentPage, setTotalPages, setFavoriteCharacters } =
  characterSlice.actions;

export default characterSlice.reducer;
