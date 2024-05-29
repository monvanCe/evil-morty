import endpoints from '@/constants/endpoints';

import { getRequest } from './api';

export const getEpisodes = async (page: number = 1) => {
  return await getRequest(endpoints.episodes(page));
};

export const getEpisode = async (id: number) => {
  return await getRequest(endpoints.episode(id));
};

export const getCharacters = async (page: number = 1) => {
  return await getRequest(endpoints.characters(page));
};

export const getCharacter = async (id: number) => {
  return await getRequest(endpoints.character(id));
};

export const getLocations = async (page: number = 1) => {
  return await getRequest(endpoints.locations(page));
};

export const getLocation = async (id: number) => {
  return await getRequest(endpoints.location(id));
};

export default {
  getEpisodes,
  getEpisode,
  getCharacters,
  getCharacter,
  getLocations,
  getLocation,
};
