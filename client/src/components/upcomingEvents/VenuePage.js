import React, { useEffect, useState, useContext } from 'react';

import useStyles from './styles/VenueStyles';
import { VenuesContext } from '../../contexts/venuesContext';
import VenueHeader from './VenueHeader';

export default function VenuePage({ match: { params } }) {
  const classes = useStyles();
  const venuesData = useContext(VenuesContext);
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    function getVenue() {
      const venue = venuesData.venues.find(({ objectId }) => objectId === params.venueId);
      setVenue(venue);
    }
    if (venuesData.venues) getVenue();
  }, [venuesData, params.venueId]);

  return <div className={classes.root}>{venue ? <VenueHeader venue={venue} /> : null}</div>;
}
