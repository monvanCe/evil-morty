export const episodeDataTransformer = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    airDate: data.air_date,
    episode: data.episode,
    characters: data.characters,
  };
};
