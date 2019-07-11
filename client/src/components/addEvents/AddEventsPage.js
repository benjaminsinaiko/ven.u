import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import SaveEvents from '@material-ui/icons/PlaylistAddCheck';

import useStyles from './styles/AddEventsPageStyles';
import VenueSelect from './VenueSelect';
import AddEventsForm from './AddEventsForm';
import ViewEventsList from './viewEvents/ViewEventsList';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { getVenues } from '../../api/parseApi';

function AddEventsPage() {
  const classes = useStyles();
  const [venues, setVenues] = useLocalStorageState('venues', []);
  const [selectedVenue, setSelectedVenue] = useState('');
  const [eventCount, setEventCount] = useState(0);
  const [newEvents, setNewEvents] = useState([]);

  useEffect(() => {
    async function fetchVenues() {
      const fetchedVenues = await getVenues();
      await setVenues(fetchedVenues);
    }
    const cachedVenues = window.localStorage.getItem('venues');
    if (cachedVenues !== '[]') {
      setVenues(JSON.parse(cachedVenues));
    } else {
      fetchVenues();
    }
  }, [setVenues]);

  const saveEvent = newEvent => {
    setNewEvents([...newEvents, newEvent]);
  };
  console.log('saved', newEvents);

  return (
    <Paper className={classes.root}>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <SaveEvents className={classes.extendedIcon} />
        Save All
      </Fab>
      <div className={classes.select}>
        <VenueSelect
          venues={venues}
          selectedVenue={selectedVenue}
          setSelectedVenue={setSelectedVenue}
        />
      </div>

      <Grid container className={classes.eventsDisplay}>
        <Grid item md={6}>
          <Typography className={classes.eventsHeader}>New Events</Typography>
          <AddEventsForm selectedVenue={selectedVenue} venues={venues} save={saveEvent} />
        </Grid>
        <Grid item md={6} className={classes.upcomingEvents}>
          <Typography className={classes.eventsHeader}>Upcoming Events: {eventCount}</Typography>
          <ViewEventsList selectedVenue={selectedVenue} setEventCount={setEventCount} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddEventsPage;
