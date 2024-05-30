export const episodes = `
    query ($page: Int) {
      episodes(page: $page) {
        results {
          id
          name
          episode
          air_date
          characters {
            id
          }
        }
        info{
          pages
        }
      }
    }
  `;

export const episode = `
    query ($id: ID!) {
      episode(id: $id) {
        id
        name
        episode
        air_date
        characters {
            id
          }
      }
    }
  `;

export const characters = `
    query ($page: Int) {
      characters(page: $page) {
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            name
          }
        }
        info {
          pages
        }
      }
    }
  `;

export const charactersByIds = `
    query ($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            name
          }
      }
    }
  `;

export const character = `
    query ($id: ID!) {
      character(id: $id) {
          id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            name
          }
      }
    }
  `;

export default {
  episodes,
  episode,
  characters,
  character,
  charactersByIds,
};
