import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/SetlistPageStyles';

export default function SetlistCard({ event }) {
  const classes = useStyles();
  let count = 1;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {event.tour && (
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Tour: {event.tour.name}
          </Typography>
        )}
        <Typography variant="h5" component="h2">
          {event.artist.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          at {event.venue.name}
        </Typography>
        <List>
          {event.sets.set.map((set, index) => (
            <div key={index}>
              {set.name && <ListItem className={classes.setName}>{set.encore ? (set.encore === 1 ? 'Encore' : `Encore ${set.encore}`) : set.name}</ListItem>}
              {set.song.map((song, i) => (
                <ListItem key={i}>{count++}. <span className={classes.songName}>{song.name}</span></ListItem>
              ))}
            </div>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
