import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import RecentlyAddedIcon from '@material-ui/icons/NewReleases';
import AllShowsIcon from '@material-ui/icons/LocalPlay';
import VenuesIcons from '@material-ui/icons/StoreMallDirectory';
import SavedShowsIcon from '@material-ui/icons/EventAvailable';
import ShowHistoryIcon from '@material-ui/icons/FastRewind';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles/NavDrawerStyles';

function NavDrawer({ drawerOpen, handleDrawerClose, user }) {
  const classes = useStyles();

  console.log('user', user);

  return (
    <Drawer className={classes.drawer} open={drawerOpen} anchor="left" onClose={handleDrawerClose}>
      <div
        className={classes.list}
        role="presentation"
        onClick={handleDrawerClose}
        onKeyDown={handleDrawerClose}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem onClick={handleDrawerClose} component={Link} to={`/events/new`} button>
            <ListItemIcon>
              <RecentlyAddedIcon />
            </ListItemIcon>
            <ListItemText primary="Recently Added" />
          </ListItem>
          <ListItem onClick={handleDrawerClose} component={Link} to={`/events/all`} button>
            <ListItemIcon>
              <AllShowsIcon />
            </ListItemIcon>
            <ListItemText primary="All Shows" />
          </ListItem>
          <ListItem onClick={handleDrawerClose} component={Link} to={`/events/venues`} button>
            <ListItemIcon>
              <VenuesIcons />
            </ListItemIcon>
            <ListItemText primary="Venues" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button disabled={!user.user}>
            <ListItemIcon>
              <SavedShowsIcon />
            </ListItemIcon>
            <ListItemText primary="Saved Shows" />
          </ListItem>
          <ListItem button disabled={!user.user}>
            <ListItemIcon>
              <ShowHistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Show History" />
          </ListItem>
          {!user.user ? (
            <ListItem button disabled className={classes.noUserMsg}>
              <ListItemIcon className={classes.noUserIcon}>
                <ErrorIcon />
              </ListItemIcon>
              <ListItemText primary="Not Logged In" color="secondary" />
            </ListItem>
          ) : null}
        </List>
      </div>
    </Drawer>
  );
}

export default NavDrawer;
