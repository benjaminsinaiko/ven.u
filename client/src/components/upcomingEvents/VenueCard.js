import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import testVenueImage from '../../assets/testVenueImage.jpg';
import useStyles from './sytles/CardStyles';

export default function MediaCard({ venue }) {
  const classes = useStyles();
  // console.log('venue', venue);

  return (
    <Card className={classes.venueCard} elevation={8}>
      <CardActionArea>
        <CardMedia
          className={classes.venueImage}
          image={testVenueImage}
          title="Contemplative Reptile"
        />
        <CardContent>
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
