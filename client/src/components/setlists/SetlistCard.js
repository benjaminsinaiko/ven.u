import React, { useRef } from 'react';
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
  const count = useRef(0);

  return (
    <Card raised className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.venueName} color="textSecondary">
          at {event.venue.name}
        </Typography>
        {event.tour && (
          <Typography className={classes.tour} color="textSecondary" gutterBottom>
            Tour: {event.tour.name}
          </Typography>
        )}
        <Typography className={classes.artistName}>{event.artist.name}</Typography>
        {event.info && <Typography className={classes.eventInfo}>*{event.info}*</Typography>}
        <List>
          {event.sets.set.map((set, index) => (
            <div key={index}>
              {set.name && (
                <ListItem className={classes.setName}>
                  {set.encore ? (set.encore === 1 ? 'Encore' : `Encore ${set.encore}`) : set.name}
                </ListItem>
              )}
              {set.song.map((song, i) => (
                <ListItem key={i} disableGutters className={classes.songContainer}>
                  <div className={classes.songNameRow}>
                    {(count.current += 1)}. <span className={classes.songName}>{song.name}</span>
                  </div>
                  <div className={classes.songExtrasRow}>
                    {song.with && (
                      <Typography className={classes.songExtraInfo}>
                        with/ {song.with.name}
                      </Typography>
                    )}
                    {song.cover && (
                      <Typography className={classes.songExtraInfo}>
                        Cover of {song.cover.name}
                      </Typography>
                    )}
                    {song.info && (
                      <Typography className={classes.songExtraInfo}>Info: {song.info}</Typography>
                    )}
                  </div>
                </ListItem>
              ))}
            </div>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" href={event.url}>
          From Setlist.fm
        </Button>
      </CardActions>
    </Card>
  );
}
