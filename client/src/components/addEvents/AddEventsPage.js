import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles/AddEventsPageStyles';
import AddEventsForm from './AddEventsForm';
import VenueSelect from './VenueSelect';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { getVenues } from '../../api/parseApi';

function AddEventsPage() {
  const [venues, setVenues] = useLocalStorageState('venues', []);
  const [selectedVenue, setSelectedVenue] = useState('');
  const classes = useStyles();

  useEffect(() => {
    async function fetchVenues() {
      const fetchedVenues = await getVenues();
      await setVenues(fetchedVenues);
    }
    const cachedVenues = window.localStorage.getItem('venues');
    if (cachedVenues) {
      console.log('FOUND CACHED');
      setVenues(JSON.parse(cachedVenues));
    } else {
      console.log('NO CACHED');
      fetchVenues();
    }
  }, [setVenues]);

  // console.log(selectedVenue);

  return (
    <Paper className={classes.root}>
      <div>
        <h1>Select Venue</h1>
        <VenueSelect
          venues={venues}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
        />
      </div>
      <div className={classes.eventsDisplay}>
        <AddEventsForm selectedVenue={selectedVenue} />
        <div>Events List</div>
      </div>
    </Paper>
  );
}

export default AddEventsPage;
