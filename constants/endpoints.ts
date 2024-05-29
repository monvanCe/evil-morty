export const episodes = (page: number = 1) => `/episode?page=${page}`;

export const episode = (id: number) => `/episode/${id}`;

export const characters = (page: number = 1) => `/character?page=${page}`;

export const character = (id: number) => `/character/${id}`;

export const locations = (page: number = 1) => `/location?page=${page}`;

export const location = (id: number) => `/location/${id}`;

export default {
  episodes,
  episode,
  characters,
  character,
  locations,
  location,
};
