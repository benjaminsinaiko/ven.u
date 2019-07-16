import React, { useContext } from 'react';

import { EventsContext } from '../../contexts/eventsContext';

function UpcomingEventsPage() {
  const eventsData = useContext(EventsContext);
  console.log(eventsData);

  return (
    <div>
      <h1>Upcoming Events Page</h1>
    </div>
  );
}

export default UpcomingEventsPage;
