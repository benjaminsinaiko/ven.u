import React, { useState, useReducer, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

import useSearchArtists from '../../hooks/useSearchArtists.js';
import { defaultDate, convertUtc } from '../../utils/dateTime';
import useStyles from './styles/EventsFormStyles';
import { FormControlLabel } from '@material-ui/core';

const initialFormState = {
  title: '',
  venue: {},
  artist: {},
  startTime: defaultDate(0),
  endTime: defaultDate(6)
};

function AddEventsForm({
  selectedVenue,
  venues,
  addEvent,
  removeEvent,
  first,
  formId,
  removeForm
}) {
  const classes = useStyles();
  // form state
  const [formValues, setFormValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialFormState
  );
  // artist search state
  const [showOptions, setShowOptions] = useState(false);
  const { artists, loading } = useSearchArtists(formValues.artist.artistName);

  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // set eventId
  useEffect(() => {
    setFormValues({ eventId: uuidv4() });
  }, []);

  // set selected venue from parent selector
  useEffect(() => {
    if (selectedVenue) {
      setFormValues({ venue: selectedVenue });
    }
  }, [selectedVenue]);

  // handle input change
  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'artist') {
      setFormValues({ [name]: { artistName: value } });
    } else {
      setFormValues({ [name]: value });
    }
  };

  // handle artist search results
  const onArtistClick = artist => {
    setFormValues({ artist: artist });
  };
  const handleOnFocus = () => {
    setShowOptions(true);
  };
  const handleOnBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };

  // remove form
  const handleRemoveForm = () => {
    removeForm(formId);
  };
  // reset form
  const handleReset = () => {
    setFormValues(initialFormState);
  };

  // check for venue/artist data
  const formNotReady = formValues.venue.objectId && formValues.artist.artistName ? false : true;

  // handle checkbox
  const handleCheck = e => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      const newEvent = {
        eventID: formValues.eventID,
        eventStartDateTime: convertUtc(formValues.startTime),
        eventEndDateTime: convertUtc(formValues.endTime),
        artist: formValues.artist.objectId,
        artistName: formValues.artist.artistName,
        venue: formValues.venue.objectId,
        title: formValues.title
      };
      addEvent(newEvent);
    }
    if (!e.target.checked) {
      removeEvent(formValues.eventID);
    }
  };

  return (
    <Paper className={classes.root} elevation={10}>
      <form className={classes.form}>
        {!first && (
          <div className={classes.removeForm}>
            <IconButton onClick={handleRemoveForm} aria-label="Delete" size="small">
              <CancelIcon fontSize="inherit" color="secondary" />
            </IconButton>
          </div>
        )}
        <div className={classes.timePickers}>
          <TextField
            required
            label="Start Time"
            name="startTime"
            value={formValues.startTime}
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
            value={formValues.endTime}
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
          value={formValues.title}
          onChange={handleInputChange}
          fullWidth
        />
        <FormControl required fullWidth>
          <InputLabel htmlFor="venue-select">Select Venue</InputLabel>
          <Select
            value={formValues.venue.venueName ? formValues.venue : ''}
            onChange={handleInputChange}
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
            value={formValues.artist.artistName || ''}
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
      </form>
      <div className={classes.actionButtons}>
        <div>
          {formNotReady && (
            <FormHelperText className={classes.notReady} error>
              Missing Venue/Artist
            </FormHelperText>
          )}
          <FormControlLabel
            control={
              <Checkbox
                disabled={formNotReady}
                checked={isChecked}
                value="done-editing"
                onChange={handleCheck}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label={isChecked ? 'Edit Event' : 'Add Event'}
          />
        </div>
        <Button onClick={handleReset} size="small" color="secondary">
          Reset
        </Button>
      </div>
    </Paper>
  );
}

export default AddEventsForm;
