import React, { useState, useEffect } from 'react';

import useStyles from './styles/ProfilePageStyles';
import { countEvents, countVenues } from '../../utils/profileHelpers';
import ProfileStatBox from './ProfileStatBox';
import ProfileStatRow from './ProfileStatRow';

export default function ProfileStats({ history }) {
  const classes = useStyles();
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalVenues, setTotalVenues] = useState(0);

  useEffect(() => {
    function count() {
      const eTotal = countEvents(history);
      setTotalEvents(eTotal);
    }
    if (history && history.length) count();
  }, [history, countEvents]);

  useEffect(() => {
    function count() {
      const vTotal = countVenues(history);
      setTotalVenues(vTotal);
    }
    if (history && history.length) count();
  }, [history, countVenues]);

  return (
    <div className={classes.statContainer}>
      <div className={classes.statBoxContainer}>
        <ProfileStatBox description="Total Shows" count={totalEvents} />
        <ProfileStatBox description="Venues Visited" count={totalVenues} />
      </div>
      <ProfileStatRow history={history} />
    </div>
  );
}
