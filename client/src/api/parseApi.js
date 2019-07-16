import Parse from 'parse';
import axios from 'axios';
import toSlug from '../utils/toSlug';

// USERS

export function getCurrentUser() {
  const currentUser = Parse.User.current();
  return currentUser;
}

export function userHasRole(user, roleName) {
  const queryRoles = new Parse.Query(Parse.Role);
  queryRoles.equalTo('name', roleName);
  queryRoles.equalTo('users', user);
  return queryRoles.find().then(function(roles) {
    return roles.length > 0;
  });
}

// EVENTS
export async function getUpcomingEvents() {
  try {
    const { data } = await axios.get('/parse/events');
    return data;
  } catch (err) {
    return err;
  }
}

export async function getNextEvents() {
  try {
    const { data } = await axios.get('/parse/events/nextTen');
    for (let eventData of data) {
      const artistSlug = toSlug(eventData.artist.artistName);
      const { data } = await axios.get(`/spotify/artists/search/${artistSlug}`);
      const artistImgs = data.images;
      eventData.images = artistImgs;
    }
    return data;
  } catch (err) {
    return err;
  }
}

export function getFutureVenueEvents(venueId) {
  return axios
    .get(`/parse/events/venue/${venueId}`)
    .then(({ data }) => {
      return data;
    })
    .catch(e => e);
}

export function addEvents(newEvents) {
  return axios
    .post('/parse/events', newEvents)
    .then(({ data }) => {
      console.log('added: ', data);
      return data;
    })
    .catch(e => e);
}

// ARTISTS
export function searchParseArtists(searchString) {
  return axios
    .get(`/parse/artists/${searchString}`)
    .then(({ data }) => {
      console.log('API HIT');
      return data;
    })
    .catch(e => e);
}

// VENUES

export function getVenues() {
  return axios
    .get('/parse/venues')
    .then(({ data }) => {
      console.log('GET VENUES');
      return data;
    })
    .catch(e => e);
}
