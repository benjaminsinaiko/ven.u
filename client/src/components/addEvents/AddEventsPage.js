import React from 'react';

import useStyles from './styles/AddEventsPageStyles';

function AddEventsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Add Events Page</h1>
    </div>
  );
}

export default AddEventsPage;
