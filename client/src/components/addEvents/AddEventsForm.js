import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AddVenue from './AddVenue';
import AddTitle from './AddTitle';
import ArtistSearch from './ArtistSearch';
import DateTimePicker from './DateTimePicker';
import { defaultDate } from '../../helpers/DateTime';
import useStyles from './styles/addEventsFormStyles';

function AddEventsForm() {
  const [venue, setVenue] = useState('Default Venue');
  const [artist, setArtist] = useState('');
  const [startTime, setStartTime] = useState(defaultDate(0));
  const [endTime, setEndTime] = useState(defaultDate(6));
  const [title, setTitle] = useState('');

  const classes = useStyles();

  const newEvent = {
    eventStartDateTime: startTime,
    eventEndDateTime: endTime,
    artist: artist.objectId,
    venue: venue.objectId,
    title: title
  };

  console.table(newEvent);

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Paper className={classes.root}>
      <Typography>Add Events</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.timePickers}>
          <DateTimePicker value={startTime} onChange={setStartTime} label="Start Time" />
          <DateTimePicker value={endTime} onChange={setEndTime} label="End Time" />
        </div>
        <AddTitle value={title} onChange={setTitle} placeholder="Title" />
        <AddVenue value={venue} onChange={setVenue} />
        <ArtistSearch value={artist.artistName} onChange={setArtist} placeholder="Artist Search" />
      </form>
    </Paper>
  );
}

export default AddEventsForm;

// newEvent.set('eventId', lastId);
// newEvent.set('eventStartDateTime', new Date());
// newEvent.set('eventEndDateTime', new Date());
// newEvent.set('artist', newArtist);
// newEvent.set('venue', newVenue);
// newEvent.set('NotPublished', true);
// newEvent.set('short_title', 'A string');
// newEvent.set('title', 'A string');
// newEvent.increment('eventId');
