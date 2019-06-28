import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AddVenue from './AddVenue';
import AddTitle from './AddTitle';
import ArtistSearch from './ArtistSearch';
import DateTimePicker from './DateTimePicker';
import { defaultDate, convertUtc } from '../../../helpers/DateTime';
import { addEvent } from '../../../api/parseApi';
import useStyles from '../styles/EventsFormStyles';

function AddEventsForm({ selectedVenue }) {
  const [venue, setVenue] = useState({});
  const [artist, setArtist] = useState('');
  const [startTime, setStartTime] = useState(defaultDate(0));
  const [endTime, setEndTime] = useState(defaultDate(6));
  const [title, setTitle] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setVenue(selectedVenue);
  }, [selectedVenue]);

  const newEvent = {
    eventStartDateTime: convertUtc(startTime),
    eventEndDateTime: convertUtc(endTime),
    artist: artist.objectId,
    venue: venue.objectId,
    title: title
  };

  const handleSubmit = e => {
    e.preventDefault();
    addEvent(newEvent);
  };

  return (
    <Paper className={classes.root} elevation={10}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.timePickers}>
          <DateTimePicker value={startTime} onChange={setStartTime} label="Start Time" />
          <DateTimePicker value={endTime} onChange={setEndTime} label="End Time" />
        </div>
        <AddTitle value={title} onChange={setTitle} placeholder="Title" />
        <AddVenue value={venue} onChange={setVenue} />
        <ArtistSearch value={artist.artistName} onChange={setArtist} placeholder="Artist Search" />
        <Button variant="contained" className={classes.button} type="submit">
          Add Event
        </Button>
      </form>
    </Paper>
  );
}

export default AddEventsForm;
