import React, {
  useEffect, useState, useContext,
} from 'react';

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
      const venueData = venuesData.venuesEvents.find(({ objectId }) => objectId === params.venueId);
      setVenue(venueData);
    }
    if (venuesData.venues) getVenue();
  }, [venuesData, params.venueId]);

  return (
    <div className={classes.root}>
      {venue ? (
        <>
          <VenueHeader venue={venue} />
          <VenueDescription venue={venue} />
          <VenueEventsList venue={venue} />
        </>
      ) : null}
    </div>
  );
}
