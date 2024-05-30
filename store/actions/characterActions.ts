import service from '@/service';
import { status, storageKeys } from '@/utils/enums';
import storage from '@/utils/storage';

import { scheduleNotificationAsync } from 'expo-notifications';

import {
  setCharacterStatus,
  setCharacters,
  setCurrentPage,
  setFavoriteCharacters,
  setSearchTerm,
  setTotalPages,
} from '../slices/characterSlice';
import { store } from '../store';
import { ICharacter } from '../types';

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

export const toggleFavoriteCharacter = async (character: ICharacter) => {
  const state = store.getState();
  const favoriteCharacters = state.character.favoriteCharacters;
  const isFavorite = favoriteCharacters.some(c => c.id === character.id);

  if (isFavorite) {
    const newFavoriteCharacters = favoriteCharacters.filter(c => c.id !== character.id);
    store.dispatch(setFavoriteCharacters(newFavoriteCharacters));
  } else {
    if (favoriteCharacters.length === 10) {
      await scheduleNotificationAsync({
        content: {
          title: '',
          body: `Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.`,
        },
        trigger: {
          seconds: 1,
        },
      });
    } else {
      const newFavoriteCharacters = [...favoriteCharacters, character];
      store.dispatch(setFavoriteCharacters(newFavoriteCharacters));
    }
  }
};
