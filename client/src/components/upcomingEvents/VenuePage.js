import React, { useEffect, useState, useContext, Fragment } from 'react';

import useStyles from './styles/VenueStyles';
import { VenuesContext } from '../../contexts/venuesContext';
import VenueHeader from './VenueHeader';
import VenueDescription from './VenueDescription';
import VenueEventsList from './VenueEventsList';

export default function VenuePage({ match: { params } }) {
  const classes = useStyles();
  const venuesData = useContext(VenuesContext);
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function getVenue() {
      const venue = venuesData.venuesEvents.find(({ objectId }) => objectId === params.venueId);
      setVenue(venue);
    }
    if (venuesData.venues) getVenue();
  }, [venuesData, params.venueId]);

  return (
    <div className={classes.root}>
      {venue ? (
        <Fragment>
          <VenueHeader venue={venue} />
          <VenueDescription venue={venue} />
          <VenueEventsList venue={venue} />
        </Fragment>
      ) : null}
    </div>
  );
}
