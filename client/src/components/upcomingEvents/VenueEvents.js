import React, { useContext, memo } from 'react';
import Grid from '@material-ui/core/Grid';

import { VenuesContext } from '../../contexts/venuesContext';
import VenueCard from './VenueCard';
import useStyles from './sytles/CardStyles';

function VenueEvents() {
  const classes = useStyles();
  const { venues, venuesEvents, loading } = useContext(VenuesContext);

  console.log(loading);
  console.log('ve', venuesEvents);

  return (
    <div className={classes.rootCard}>
      <Grid container className={classes.venuesGrid}>
        {!loading
          ? venues.map(venue => (
              <Grid item sm={6} xs={12} key={venue.objectId}>
                <VenueCard venue={venue} />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}

export default memo(VenueEvents);
