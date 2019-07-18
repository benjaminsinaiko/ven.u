import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { VenuesContext } from '../../contexts/venuesContext';
import VenueCard from './VenueCard';
import useStyles from './sytles/CardStyles';

export default function VenueEvents() {
  const venuesData = useContext(VenuesContext);
  const classes = useStyles();

  console.log(venuesData);

  return (
    <div className={classes.rootCard}>
      <Grid container className={classes.venuesGrid}>
        {venuesData.venues.map(venue => (
          <Grid item sm={6} xs={12} key={venue.objectId}>
            <VenueCard venue={venue} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
