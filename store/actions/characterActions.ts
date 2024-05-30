import service from '@/service';
import { status, storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import {
  setCharacterStatus,
  setCharacters,
  setCurrentPage,
  setFavoriteCharacters,
  setSearchTerm,
  setTotalPages,
} from '../slices/characterSlice';
import { store } from '../store';

export const loadInitialCharacters = async () => {
  const characters = await service.getCharacters();
  const dispatch = store.dispatch;

  dispatch(setCurrentPage(1));
  dispatch(setTotalPages(characters.info.pages));
  dispatch(setCharacters(characters.results));
  dispatch(setCharacterStatus(status.Success));
};

export const loadFavoriteCharacters = async () => {
  const dispatch = store.dispatch;
  const favoriteCharacters = await storage.getItem(storageKeys.FavoriteCharacters);

  if (favoriteCharacters) {
    const parsedCharacters = JSON.parse(favoriteCharacters);
    dispatch(setFavoriteCharacters(parsedCharacters));
  }
};

export const loadCharacters = async (page: number) => {
  const dispatch = store.dispatch;
  dispatch(setCurrentPage(page));
  dispatch(setCharacterStatus(status.Loading));

  const characters = await service.getCharacters(page);

  dispatch(setCharacters(characters.results));
  dispatch(setCharacterStatus(status.Success));
};

export const setCharacterSearchTerm = async (searchTerm: string) => {
  const dispatch = store.dispatch;
  dispatch(setSearchTerm(searchTerm));
};

export const loadCharactersByIds = async (ids: number[]) => {
  const dispatch = store.dispatch;
  dispatch(setCharacterStatus(status.Loading));
  dispatch(setCurrentPage(1));
  dispatch(setTotalPages(1));

  const characters = await service.getCharactersByIds(ids);

  dispatch(setCharacters(characters));
  dispatch(setCharacterStatus(status.Success));
};

export const toggleFavoriteCharacter = async (id: number) => {
  const state = store.getState();
  const characters = state.character.favoriteCharacters;
  const isFavorite = characters.includes(id);

  if (isFavorite) {
    const newFavoriteCharacters = characters.filter(characterId => characterId !== id);
    store.dispatch(setFavoriteCharacters(newFavoriteCharacters));
  } else {
    const newFavoriteCharacters = [...characters, id];
    store.dispatch(setFavoriteCharacters(newFavoriteCharacters));
  }
};
