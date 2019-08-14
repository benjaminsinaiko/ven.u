import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PlayIcon from '@material-ui/icons/PlayArrow';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles/EventStyles';


export default function EventSongList({ songs }) {
  const classes = useStyles();
  console.log('songs', songs);
  return (
    <div>
      <List className={classes.songList}>
        {songs.map(song => (
          <ListItem key={song.id}>
            <img src={song.album.images[2].url} alt="album art" />
            <PlayIcon />
            <ListItemText primary={song.name} secondary={song.album.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
