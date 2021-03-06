import Parse from 'parse';
import axios from 'axios';

// USERS

export function getCurrentUser() {
  const currentUser = Parse.User.current();
  return currentUser;
}

export function userHasRole(user, roleName) {
  const queryRoles = new Parse.Query(Parse.Role);
  queryRoles.equalTo('name', roleName);
  queryRoles.equalTo('users', user);
  return queryRoles.find().then(roles => roles.length > 0);
}

// EVENTS
export async function getAllEvents() {
  try {
    const { data } = await axios.get('/parse/events/');
    return data;
  } catch (err) {
    return err;
  }
}

export async function getUpcomingEvents(limit, skip) {
  try {
    // set limit and skip
    const { data } = await axios.get(`/parse/events/${limit}/${skip}`);
    return data;
  } catch (err) {
    return err;
  }
}

export async function searchEvent(objectId) {
  try {
    const { data } = await axios.get(`/parse/events/event/${objectId}`);
    return data;
  } catch (err) {
    return err;
  }
}

export function getFutureVenueEvents(venueId) {
  return axios
    .get(`/parse/events/venue/${venueId}`)
    .then(({ data }) => {
      console.log('Hit Parse', data);
      return data;
    })
    .catch(e => e);
}

export function getAllVenueEvents(venueIds) {
  return axios
    .post('/parse/events/venue/', venueIds)
    .then(({ data }) => {
      console.log('Hit Parse', data);
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
