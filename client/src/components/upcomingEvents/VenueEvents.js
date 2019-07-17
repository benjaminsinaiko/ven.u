import React from 'react';

import sampleEvents from '../../api/sampleEventsSearch';

export default function VenueEvents() {
  const eventsData = { events: sampleEvents };

  console.log(eventsData);

  return (
    <div>
      <h1>New Events</h1>
    </div>
  );
}
