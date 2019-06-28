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

export function getVenues() {
  return axios
    .get('/parse/venues')
    .then(({ data }) => {
      console.log('GET VENUES');
      return data;
    })
    .catch(e => e);
}

export function getVenueEvents(venueId) {
  return axios
    .get(`/parse/events/${venueId}`)
    .then(({data}) => {
     return data;
    })
    .catch(e => e)
}

export function addEvent(newEvent) {
  return axios
    .post('/parse/events', newEvent)
    .then(({ data }) => {
      console.log('added: ', data);
      return data;
    })
    .catch(e => e);
}
