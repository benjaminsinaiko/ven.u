import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/ProfilePageStyles';

export default function ProfileStatBox({ description, count }) {
  const classes = useStyles();
  return (
    <Paper square className={classes.statBox}>
      <div className={classes.statInfo}>
        <Typography gutterBottom variant="h3">
          {count}
        </Typography>
        <Typography>{description}</Typography>
      </div>
    </Paper>
  );
}
