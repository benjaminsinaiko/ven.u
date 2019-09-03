import React, { useState, useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/ProfilePageStyles';
import { VenuesContext } from '../../contexts/venuesContext';
import { getMostArtist, getMostVenue, getVenueName } from '../../utils/profileHelpers';

export default function ProfileStatRow({ history }) {
  const classes = useStyles();
  const { venues } = useContext(VenuesContext);
  const [mostVenues, setMostVenues] = useState([]);
  const [mostArtists, setMostArtists] = useState([]);

  useEffect(() => {
    function findVenues() {
      const v = getMostVenue(history);
      setMostVenues(v);
    }
    if (history && history.length) findVenues();
  }, [history]);

  useEffect(() => {
    function findArtist() {
      const a = getMostArtist(history);
      setMostArtists(a);
    }
    if (history && history.length) findArtist();
  }, [history]);

  return (
    <div className={classes.statRowContainer}>
      <div className={classes.statRow}>
        <Typography gutterBottom>Most Seen Artist</Typography>
        {mostArtists.length
          ? mostArtists.slice(0, 5).map(artist => (
            <Typography key={artist[0]} variant="h4">
                {`${artist[0]} (${artist[1]})`}
              </Typography>
          ))
          : 'None seen'}
      </div>
      <div className={classes.statRow}>
        <Typography gutterBottom>Most Visited Venues</Typography>
        {mostVenues.length
          ? mostVenues.slice(0, 5).map(venue => (
            <Typography key={venue[0]} variant="h4">
                {`${getVenueName(venues, venue[0])} (${venue[1]})`}
              </Typography>
          ))
          : 'None visted'}
      </div>
    </div>
  );
}
