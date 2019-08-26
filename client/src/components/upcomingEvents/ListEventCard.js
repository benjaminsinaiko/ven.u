import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/CalendarToday';
// import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import IconButton from '@material-ui/core/IconButton';
import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles/CardStyles';
import { convertLocalDisplay } from '../../utils/dateTime';
import useFetchImage from '../../hooks/useFetchImage';

export default function ListEventCard({ event }) {
  const classes = useStyles();
  const [artistImage, loading] = useFetchImage(event.artist.artistSlug, 'sm');

  return (
    <Link to={`/event/${event.objectId}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.eventCard}>
        <Grid container>
          <Grid item xs={3}>
            {loading ? (
              <Skeleton variant="rect" className={classes.skeleton} />
            ) : (
              <img src={artistImage} className={classes.eventImage} alt="Artist" />
            )}
          </Grid>
          <Grid item xs={7} sm={6} className={classes.details}>
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
                {convertLocalDisplay(event.eventStartDateTime.iso)}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={2} sm={3} className={classes.calAction}>
            <IconButton>
              <EventIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
}
