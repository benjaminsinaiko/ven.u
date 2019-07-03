import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/LandingEventsGridStyles';
import sampleNextTen from '../../api/sampleNextTen';
import { converLocalDisplay } from '../../utils/dateTime';
import crowdImage from '../../assets/crowdImage_small.jpg';

const LandingEventsGrid = () => {
  const classes = useStyles();
  console.log();

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Upcoming Shows</Typography>
      <GridList className={classes.gridList} cols={2.5} cellHeight={300}>
        {sampleNextTen.map(tile => (
          <GridListTile key={tile.objectId} className={classes.tile}>
            {/* <img src={tile.venue.venuAvatar.url} alt={tile.title} /> */}
            <img src={crowdImage} alt={tile.title} />
            <GridListTileBar title={tile.venue.venueName} titlePosition="top" />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <Typography>{converLocalDisplay(tile.eventStartDateTime.iso)}</Typography>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default LandingEventsGrid;
