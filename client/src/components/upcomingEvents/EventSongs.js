import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';

import getTopSongs from '../../api/spotifyApi';
import useStyles from './styles/EventStyles';
import EventSongList from './EventSongList';

export default function EventsSongs({ artist }) {
  const classes = useStyles();
  const [songs, setSongs] = useState();

  useEffect(() => {
    async function getSongs() {
      const tracks = await getTopSongs(artist);
      if (tracks.length) {
        setSongs(tracks);
      }
    }
    getSongs();
  }, [artist]);

  return (
    <Paper className={classes.player}>
      <h1>Top Songs</h1>
      {songs && <EventSongList songs={songs} />}
    </Paper>
  );
}
