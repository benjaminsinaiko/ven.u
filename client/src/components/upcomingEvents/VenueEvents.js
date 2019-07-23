import React, { useContext, memo } from 'react';
import Grid from '@material-ui/core/Grid';

import { VenuesContext } from '../../contexts/venuesContext';
import VenueCard from './VenueCard';
import useStyles from './sytles/CardStyles';

function VenueEvents() {
  const classes = useStyles();
  const { venues, venuesEvents, loading } = useContext(VenuesContext);

  return (
    <div className={classes.rootCard}>
      <Grid container>
        {!loading
          ? (venuesEvents ? venuesEvents : venues).map(venue => (
              <Grid item xs={12} sm={6} key={venue.objectId}>
                <VenueCard venue={venue} />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}

export default memo(VenueEvents);
