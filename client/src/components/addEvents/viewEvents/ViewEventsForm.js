import React from 'react';
import Paper from '@material-ui/core/Paper';

import EventTextField from './EventTextField';
import useStyles from '../styles/EventsFormStyles';
import { convertLocalDisplay } from '../../../utils/dateTime';

const ViewEventsForm = ({ event }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form className={classes.form}>
        <div className={classes.timePickers}>
          <EventTextField
            placeholder="Start Time"
            value={convertLocalDisplay(event.eventStartDateTime.iso) || null}
            readOnly={true}
          />
          <EventTextField
            placeholder="End Time"
            value={convertLocalDisplay(event.eventEndDateTime.iso)}
            readOnly={true}
          />
        </div>
        <EventTextField placeholder="Title" value={event.title} readOnly={true} />
        <EventTextField placeholder="Venue" value={event.venue.venueName} readOnly={true} />
        <EventTextField placeholder="Artist" value={event.artist.artistName} readOnly={true} />
      </form>
    </Paper>
  );
};

export default ViewEventsForm;
