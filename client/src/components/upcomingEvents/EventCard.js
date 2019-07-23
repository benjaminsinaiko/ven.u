import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/CalendarToday';
// import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './sytles/CardStyles';
import crowdImage from '../../assets/crowdImage_small.jpg';
import { converLocalDisplay } from '../../utils/dateTime';
import toSlug from '../../utils/toSlug';
import useFetchImage from '../../hooks/useFetchImage';

export default function MediaControlCard({ event }) {
  const classes = useStyles();
  // const [artistImage, setArtistImage] = useState(null);
  const [artistImage, loading] = useFetchImage(event);

  // useEffect(() => {
  //   async function fetchImage() {
  //     const artistSlug = toSlug(event.artist.artistName);
  //     const { data } = await axios.get(`/spotify/artists/search/${artistSlug}`);
  //     console.log(data.images);
  //     const artistImg = data.images ? data.images[2].url : null;
  //     setArtistImage(artistImg);
  //   }
  //   fetchImage();
  // }, [event.artist.artistName]);

  console.log('artistImage', artistImage);
  console.log('loading', loading);

  return (
    <Card className={classes.eventCard}>
      <Grid container>
        <Grid item xs={3}>
          {artistImage ? (
            <img src={artistImage} className={classes.eventImage} alt="Artist" />
          ) : (
            <img src={crowdImage} className={classes.eventImage} alt="Crowd" />
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
              {converLocalDisplay(event.eventStartDateTime.iso)}
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
  );
}
