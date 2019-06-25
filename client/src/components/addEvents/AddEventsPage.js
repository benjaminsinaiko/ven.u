import React from 'react';
import Paper from '@material-ui/core/Paper';

import AddEventsForm from './AddEventsForm';
import useStyles from './styles/AddEventsPageStyles';

function AddEventsPage() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div>
        <h1>Select Venue</h1>
        <select />
      </div>
      <div className={classes.eventsDisplay}>
        <AddEventsForm />
        <div>Events List</div>
      </div>
    </Paper>
  );
}

export default AddEventsPage;
