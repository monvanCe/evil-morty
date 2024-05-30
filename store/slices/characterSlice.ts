import { status, storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import { createSlice } from '@reduxjs/toolkit';

import { ICharacter } from '../types';

interface CharacterState {
  characters: ICharacter[];
  currentPage: number | null;
  totalPages: number | null;
  characterStatus: status | null;
  searchTerm: string;
  favoriteCharacters: ICharacter[];
}

const initialState: CharacterState = {
  characters: [],
  currentPage: null,
  totalPages: null,
  characterStatus: null,
  searchTerm: '',
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
      storage.setItem(storageKeys.FavoriteCharacters, JSON.stringify(action.payload));
    },
    setCharacterStatus: (state, action) => {
      state.characterStatus = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setCharacters,
  setCurrentPage,
  setTotalPages,
  setFavoriteCharacters,
  setCharacterStatus,
  setSearchTerm,
} = characterSlice.actions;

export default characterSlice.reducer;
