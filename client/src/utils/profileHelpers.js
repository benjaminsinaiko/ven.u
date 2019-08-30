export function getInitials(fullName) {
  const splitName = fullName.split(' ');
  const initials = splitName.reduce((acc, cur) => acc + cur[0], '').toUpperCase();
  if (initials.length > 2) {
    return initials[0] + initials[initials.length - 1];
  }
  return initials;
}

export function countEvents(events) {
  if (events.length) {
    return events.length;
  }
  return 0;
}

export function countVenues(events) {
  const venueIds = events.map(event => event.event.venue.objectId);
  const venueCount = [...new Set(venueIds)];
  return venueCount.length;
}

export function getMostArtist(events) {
  const countedArtists = events.reduce((allEvents, event) => {
    const artistId = event.event.artist.artistName;
    if (artistId in allEvents) {
      allEvents[artistId]++;
    } else {
      allEvents[artistId] = 1;
    }
    return allEvents;
  }, {});
  const sortArtists = Object.entries(countedArtists).sort((a, b) => b[1] - a[1]);

  return sortArtists;
}

export function getMostVenue(events) {
  const countedVenues = events.reduce((allEvents, event) => {
    const venue = event.event.venue.objectId;
    if (venue in allEvents) {
      allEvents[venue]++;
    } else {
      allEvents[venue] = 1;
    }
    return allEvents;
  }, {});
  const sortVenues = Object.entries(countedVenues).sort((a, b) => b[1] - a[1]);

  return sortVenues;
}

export function getVenueName(venues, venueId) {
  const foundVenue = venues.find(venue => venue.objectId === venueId);
  return foundVenue.venueName;
}
