import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import testVenueImage from '../../assets/testVenueImage.jpg';
import useStyles from './styles/CardStyles';
import { EventsContext } from '../../contexts/eventsContext';

export default function ListVenueCard({ venue }) {
  const classes = useStyles();
  const { events } = useContext(EventsContext);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    function countEvents() {
      const count = events.reduce(
        (num, event) => num + (event.venue.objectId === venue.objectId),
        0,
      );
      setEventCount(count);
    }
    countEvents();
  }, []);

  return (
    <Card className={classes.venueCard} elevation={8}>
      <CardActionArea
        className={classes.actionArea}
        component={Link}
        to={`/venue/${venue.objectId}`}
      >
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
          {eventCount && eventCount > 0 ? (
            <Typography component="h3">Upcoming Shows: {eventCount}</Typography>
          ) : (
            <Typography component="h3">No Upcoming Shows</Typography>
          )}
        </div>
      </CardActionArea>
    </Card>
  );
}
