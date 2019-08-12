import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/VenueStyles';

export default function VenueDescription({ venue }) {
  const classes = useStyles();

  return (
    <Paper className={classes.venueDescription}>
      <Typography>{venue.venueDescription}</Typography>
    </Paper>
  );
}
