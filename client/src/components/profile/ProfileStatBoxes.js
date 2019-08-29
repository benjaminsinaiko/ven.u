import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/ProfilePageStyles';
import { countEvents, countVenues } from '../../utils/profileHelpers';

export default function ProfileStatBoxes({ history }) {
  const classes = useStyles();
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalVenues, setTotalVenues] = useState(0);
  console.log('history', history);
  console.log('count', totalEvents);
  console.log('venues', totalVenues);

  useEffect(() => {
    function count() {
      const eTotal = countEvents(history);
      const vTotal = countVenues(history);
      setTotalEvents(eTotal);
      setTotalVenues(vTotal);
    }
    if (history && history.length) count();
  }, [history, countEvents, countVenues]);

  return (
    <div className={classes.statContainer}>
      <Paper square className={classes.statBox}>
        <div className={classes.statInfo}>
          <Typography gutterBottom variant="h3">
            {totalEvents}
          </Typography>
          <Typography>Total Shows</Typography>
        </div>
      </Paper>
      <Paper square className={classes.statBox}>
        <div className={classes.statInfo}>
          <Typography gutterBottom variant="h3">
            {totalVenues}
          </Typography>
          <Typography>Venues Visited</Typography>
        </div>
      </Paper>
    </div>
  );
}
