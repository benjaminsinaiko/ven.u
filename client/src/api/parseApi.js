import Parse from 'parse';
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

export function getFutureVenueEvents(venueId) {
  return axios
    .get(`/parse/events/venue/${venueId}`)
    .then(({ data }) => {
      return data;
    })
    .catch(e => e);
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
