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
import SavedShows from '@material-ui/icons/EventAvailable';
import ShowHistory from '@material-ui/icons/FastRewind';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles/NavDrawerStyles';

function NavDrawer({ drawerOpen, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      classes={{
        paper: classes.drawerPaper
      }}>
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
        <ListItem button>
          <ListItemIcon>
            <SavedShows />
          </ListItemIcon>
          <ListItemText primary="Saved Shows" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShowHistory />
          </ListItemIcon>
          <ListItemText primary="Show History" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default NavDrawer;
