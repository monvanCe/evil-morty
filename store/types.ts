export interface IEpisode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
  characters: { id: number }[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}
