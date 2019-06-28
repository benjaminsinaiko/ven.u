import React from 'react';
import Paper from '@material-ui/core/Paper';

import DateTimePicker from '../addEvents/DateTimePicker';
import EventTextField from './EventTextField';
import useStyles from '../styles/EventsFormStyles';
import { convertLocal } from '../../../helpers/DateTime';

const ViewEventsForm = ({ event }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form className={classes.form}>
        <div className={classes.timePickers}>
          <DateTimePicker
            disabled
            label="Start Time"
            value={convertLocal(event.eventStartDateTime.iso)}
          />
          <DateTimePicker
            disabled
            label="End Time"
            value={convertLocal(event.eventEndDateTime.iso)}
          />
        </div>
        <EventTextField disabled placeholder="Title" value={event.title} />
        <EventTextField disabled placeholder="Venue" value={event.venue.venueName} />
        <EventTextField disabled placeholder="Artist" value={event.artist.artistName} />
      </form>
    </Paper>
  );
};

export default ViewEventsForm;
