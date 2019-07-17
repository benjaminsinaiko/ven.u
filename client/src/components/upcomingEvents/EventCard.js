import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/CalendarToday';
// import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './sytles/EventCardStyles';
import crowdImage from '../../assets/crowdImage_small.jpg';
import { converLocalDisplay } from '../../utils/dateTime';

export default function MediaControlCard({ event }) {
  const classes = useStyles();

  // console.log('event', event);
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={3}>
          {event.images[2] ? (
            <img src={event.images[2].url} className={classes.image} alt="Artist" />
          ) : (
            crowdImage
          )}
        </Grid>
        <Grid item xs={6} className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {event.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {event.venue.venueName}
            </Typography>
          </CardContent>
          <div className={classes.dateTime}>
            <Typography variant="subtitle1" color="textSecondary">
              {converLocalDisplay(event.eventStartDateTime.iso)}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.calAction}>
          <IconButton>
            <EventIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}
