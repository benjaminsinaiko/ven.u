import React from 'react';

import ViewEventsForm from './ViewEventsForm';

const ViewEventsList = ({ selectedVenue }) => {
  const testEvents = [
    {
      eventTitle: 'Test Title 1',
      eventStartDateTime: '2019-06-21T05:23:19.559Z',
      eventEndDateTime: '2019-06-21T11:23:19.559Z',
      artist: 'Test Artist 1',
      venue: 'Test Venue 1'
    },
    {
      eventTitle: 'Test Title 2',
      eventStartDateTime: '2019-06-21T05:23:19.559Z',
      eventEndDateTime: '2019-06-21T05:23:19.559Z',
      artist: 'Test Artist 2',
      venue: 'Test Venue 2'
    },
    {
      eventTitle: 'Test Title 3',
      eventStartDateTime: '2019-06-21T05:23:19.559Z',
      eventEndDateTime: '2019-06-21T05:23:19.559Z',
      artist: 'Test Artist 3',
      venue: 'Test Venue 3'
    }
  ];

  return (
    <>
      {testEvents.map(event => (
        <ViewEventsForm event={event} />
      ))}
    </>
  );
};

export default ViewEventsList;
