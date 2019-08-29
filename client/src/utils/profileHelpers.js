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
  const countedVenues = events.reduce((allEvents, event) => {
    const venue = event.event.venue.objectId;
    if (venue in allEvents) {
      allEvents[venue]++;
    } else {
      allEvents[venue] = 1;
    }
    return allEvents;
  }, {});
  return Object.keys(countedVenues).length;
}
