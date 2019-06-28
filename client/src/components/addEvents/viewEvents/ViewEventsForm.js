import React from 'react';
import Paper from '@material-ui/core/Paper';

import DateTimePicker from '../addEvents/DateTimePicker';
import EventTextField from './EventTextField';
import useStyles from '../styles/EventsFormStyles';
import { convertLocal } from '../../../helpers/DateTime';

const ViewEventsForm = ({ event }) => {
  const classes = useStyles();

  console.log(event);

  return (
    <Paper className={classes.root}>
      <form className={classes.form}>
        <div className={classes.timePickers}>
          <DateTimePicker
            disabled
            label="Start Time"
            value={convertLocal(event.eventStartDateTime)}
          />
          <DateTimePicker disabled label="End Time" value={convertLocal(event.eventEndDateTime)} />
        </div>
        <EventTextField disabled placeholder="Title" value={event.eventTitle} />
        <EventTextField disabled placeholder="Venue" value={event.venue} />
        <EventTextField disabled placeholder="Artist" value={event.artist} />
      </form>
    </Paper>
  );
};

export default ViewEventsForm;
