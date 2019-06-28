import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/AddEventsPageStyles';
import VenueSelect from './VenueSelect';
import AddEventsForm from './addEvents/AddEventsForm';
import ViewEventsList from './viewEvents/ViewEventsList';
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

  return (
    <Paper className={classes.root}>
      <div>
        <VenueSelect
          venues={venues}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
        />
      </div>

      <Grid container className={classes.eventsDisplay}>
        <Grid item md={6}>
          <Typography className={classes.eventsHeader}>New Events</Typography>
          <AddEventsForm selectedVenue={selectedVenue} />
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.eventsHeader}>Current Events</Typography>
          <ViewEventsList selectedVenue={selectedVenue} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddEventsPage;
