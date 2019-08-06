import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import MicIcon from '@material-ui/icons/Mic';
import PinIcon from '@material-ui/icons/PinDrop';

import useStyles from './styles/EventStyles';
import { dayOfWeek, dateAndYear, time } from '../../utils/dateTime';

export default function EventDetails({ event }) {
  const classes = useStyles();
  console.log('event', event);

  return (
    <>
      <Paper className={classes.detailCard}>
        <EventIcon className={classes.icons} />
        <Typography>{dayOfWeek(event.eventStartDateTime.iso)}</Typography>
        <Typography>{dateAndYear(event.eventStartDateTime.iso)}</Typography>
        <Typography>{time(event.eventStartDateTime.iso)}</Typography>
      </Paper>
      <Paper className={classes.detailCard}>
        <MicIcon className={classes.icons} />
        <Typography>{event.artist.artistName}</Typography>
      </Paper>
      <Paper className={classes.detailCard}>
        <PinIcon className={classes.icons} />
        <Typography>{event.venue.venueName}</Typography>
        <Typography>{event.venue.Address}</Typography>
        <Typography>{event.venue.venueCity}</Typography>
      </Paper>
    </>
  );
}
