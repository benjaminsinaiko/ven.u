import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ArtistSearch from './ArtistSearch';
import useStyles from './styles/addEventsFormStyles';

function AddEventsForm() {
  const [venue, setVenue] = useState('');
  const [artist, setArtist] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [title, setTitle] = useState('');

  const classes = useStyles();

  console.log('artistState', artist);

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Paper className={classes.root}>
      <Typography>Add Events</Typography>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={setTitle} placeholder="Title" />
        <input value={venue} onChange={setVenue} placeholder="Venue search" />
        <ArtistSearch value={artist.artistName} onChange={setArtist} placeholder="Artist Search" />
        <input value={startTime} onChange={setStartTime} placeholder="Start Time" />
        <input value={endTime} onChange={setEndTime} placeholder="End Time" />
      </form>
    </Paper>
  );
}

export default AddEventsForm;
