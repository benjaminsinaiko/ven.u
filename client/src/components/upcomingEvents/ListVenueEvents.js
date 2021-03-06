import React, { useContext, memo } from 'react';
import Grid from '@material-ui/core/Grid';

import { VenuesContext } from '../../contexts/venuesContext';
import VenueCard from './ListVenueCard';
import useStyles from './styles/CardStyles';

function ListVenueEvents() {
  const classes = useStyles();
  const { venues, loading } = useContext(VenuesContext);


  return (
    <div className={classes.rootCard}>
      <Grid container>
        {!loading
          ? (venues).map(venue => (
            <Grid item xs={12} sm={6} key={venue.objectId}>
              <VenueCard venue={venue} />
            </Grid>
          ))
          : null}
      </Grid>
    </div>
  );
}

export default memo(ListVenueEvents);
