import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import useSearchArtists from '../../../hooks/useSearchArtists.js';
import { defaultDate, convertUtc } from '../../../utils/dateTime';
import { addEvent } from '../../../api/parseApi';
import useStyles from '../styles/EventsFormStyles';

const initialFormState = {
  title: '',
  venue: {},
  artist: {},
  startTime: defaultDate(0),
  endTime: defaultDate(6)
};

function AddEventsForm({ selectedVenue, venues }) {
  const classes = useStyles();
  const [form, setFormValues] = useState(initialFormState);
  const [showOptions, setShowOptions] = useState(false);
  const { artists, loading } = useSearchArtists(form.artist.artistName);

  useEffect(() => {
    if (selectedVenue) {
      setFormValues(f => {
        return { ...f, venue: selectedVenue };
      });
    }
  }, [selectedVenue]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'artist') {
      setFormValues({ ...form, [name]: { artistName: value } });
    } else {
      setFormValues({ ...form, [name]: value });
    }
  };

  const onArtistClick = artist => {
    setFormValues(f => {
      return { ...f, artist: artist };
    });
  };
  const handleOnFocus = () => {
    setShowOptions(true);
  };
  const handleOnBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };

  const handleVenueChange = e => {
    setFormValues(f => {
      return { ...f, venue: e.target.value };
    });
  };

  // const newEvent = {
  //   eventStartDateTime: convertUtc(startTime),
  //   eventEndDateTime: convertUtc(endTime),
  //   artist: artist.objectId,
  //   venue: venue.objectId,
  //   title: title
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // addEvent(form);
    setFormValues(initialFormState);
    console.log('submitted');
  };
  // console.log('formState', form);

  console.log('venue **', form.venue);

  return (
    <Paper className={classes.root} elevation={10}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.timePickers}>
          <TextField
            required
            label="Start Time"
            name="startTime"
            value={form.startTime}
            onChange={handleInputChange}
            type="datetime-local"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            required
            label="End Time"
            name="endTime"
            value={form.endTime}
            onChange={handleInputChange}
            type="datetime-local"
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <TextField
          required
          label="Title"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          fullWidth
        />
        <FormControl required className={classes.formControl} fullWidth>
          <InputLabel htmlFor="venue-select">Select Venue</InputLabel>
          <Select
            value={form.venue.venueName ? form.venue : ''}
            onChange={handleVenueChange}
            input={<Input name="venue" className={classes.select} id="venue-select" />}>
            {venues.map(venue => (
              <MenuItem key={venue.objectId} value={venue}>
                {venue.venueName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <>
          {loading && <span>Loading...</span>}
          <TextField
            required
            label="Artist Search"
            name="artist"
            value={form.artist.artistName || ''}
            onChange={handleInputChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            fullWidth
          />
          {showOptions &&
            artists.length > 2 &&
            artists.map(artist => (
              <MenuItem key={artist.objectId} value={artist} onClick={() => onArtistClick(artist)}>
                {artist.artistName}
              </MenuItem>
            ))}
        </>
        <Button variant="contained" className={classes.button} type="submit">
          Add Event
        </Button>
      </form>
    </Paper>
  );
}

export default AddEventsForm;
