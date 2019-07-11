import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import SaveEvents from '@material-ui/icons/PlaylistAddCheck';
import AddIcon from '@material-ui/icons/Add';

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
  const [forms, setForms] = useState([{ id: uuidv4() }]);
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

  const addForm = () => {
    setForms([...forms, { id: uuidv4() }]);
  };
  const removeForm = formId => {
    setForms(forms.filter(form => form.id !== formId));
  };

  const addEvent = newEvent => {
    setNewEvents([...newEvents, newEvent]);
  };
  const removeEvent = eventId => {
    setNewEvents(newEvents.filter(event => event.eventID !== eventId));
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
          <Typography className={classes.eventsHeader}>
            New Events
            <Button size="small" aria-label="Add" onClick={addForm} className={classes.addForm}>
              <AddIcon />
            </Button>
          </Typography>
          <div className={classes.eventsColumn}>
            {forms.map((form, i) => (
              <AddEventsForm
                key={form.id}
                selectedVenue={selectedVenue}
                venues={venues}
                addEvent={addEvent}
                removeEvent={removeEvent}
                first={i === 0}
                formId={form.id}
                removeForm={removeForm}
              />
            ))}
          </div>
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.eventsHeader}>Upcoming Events: {eventCount}</Typography>
          <div className={classes.eventsColumn}>
            <ViewEventsList selectedVenue={selectedVenue} setEventCount={setEventCount} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddEventsPage;
