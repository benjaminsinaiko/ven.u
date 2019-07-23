import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import testVenueImage from '../../assets/testVenueImage.jpg';
import useStyles from './sytles/CardStyles';

export default function ListVenueCard({ venue }) {
  const classes = useStyles();

  return (
    <Card className={classes.venueCard} elevation={8}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia className={classes.venueImage} image={testVenueImage} title="Venue logo" />
        <CardContent className={classes.venueInfo}>
          <Typography gutterBottom variant="h5" component="h2">
            {venue.venueName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {venue.Address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {venue.venueCity}
          </Typography>
        </CardContent>
        <div className={classes.upcomingEvents}>
          {venue.events ? (
            venue.events.length > 0 ? (
              <Typography component="h3">Upcoming Shows: {venue.events.length}</Typography>
            ) : (
              <Typography component="h3">No Upcoming Shows</Typography>
            )
          ) : null}
        </div>
      </CardActionArea>
    </Card>
  );
}
