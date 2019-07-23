import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AllEvents from './AllEvents';
import RecentEvents from './RecentEvents';
import VenueEvents from './VenueEvents';
import useStyles from './sytles/indexStyles';

function UpcomingEventsPage({ match: { path }, location: { pathname } }) {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  // set tab from pathname
  useEffect(() => {
    switch (pathname) {
      case '/events/new':
        setTab(0);
        break;
      case '/events/all':
        setTab(1);
        break;
      case '/events/venues':
        setTab(2);
        break;
      default:
        setTab(0);
    }
  }, [pathname]);

  // handle tab change
  function handleChange(event, newValue) {
    setTab(newValue);
  }

  return (
    <Router>
      <div className={classes.root}>
        <Paper>
          <Tabs
            value={tab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered>
            <Tab label="Recently Added" component={Link} to={`${path}/new`} />
            <Tab label="All Shows" component={Link} to={`${path}/all`} />
            <Tab label="Venues" component={Link} to={`${path}/venues`} />
          </Tabs>
        </Paper>
        <div className={classes.list}>
          <Route path={`${path}/new`} component={RecentEvents} />
          <Route path={`${path}/all`} component={AllEvents} />
          <Route path={`${path}/venues`} component={VenueEvents} />
        </div>
      </div>
    </Router>
  );
}

export default UpcomingEventsPage;