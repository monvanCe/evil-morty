import queries from '@/constants/queries';

import { graphqlRequest } from './api';

export const getEpisodes = async (page = 1) => {
  const query = queries.episodes;
  const variables = { page };
  const response = await graphqlRequest(query, variables);
  return response.data.episodes;
};

export const getEpisode = async (id: number) => {
  const query = queries.episode;
  const variables = { id };
  const response = await graphqlRequest(query, variables);
  return response.data.episode;
};

export const getCharacters = async (page = 1) => {
  const query = queries.characters;
  const variables = { page };
  const response = await graphqlRequest(query, variables);
  return response.data.characters;
};

export const getCharactersByIds = async (ids: number[]) => {
  const query = queries.charactersByIds;
  const variables = { ids };
  const response = await graphqlRequest(query, variables);
  return response.data.charactersByIds;
};

export const getCharacter = async (id: number) => {
  const query = queries.character;
  const variables = { id };
  const response = await graphqlRequest(query, variables);
  return response.data.character;
};

export default {
  getEpisodes,
  getEpisode,
  getCharacters,
  getCharacter,
  getCharactersByIds,
};
