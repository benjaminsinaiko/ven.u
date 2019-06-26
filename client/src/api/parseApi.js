import axios from 'axios';

export function searchParseArtists(searchString) {
  return axios
    .get(`/parse/artists/${searchString}`)
    .then(({ data }) => {
      console.log('API HIT');
      return data;
    })
    .catch(e => e);
}
