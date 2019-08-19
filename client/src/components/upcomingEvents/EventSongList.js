import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles/EventStyles';

export default function EventSongList({ songs }) {
  const classes = useStyles();
  const [selectedSong, setSelectedSong] = useState(null);
  const [audio] = useState(new Audio());


  const handlePlay = song => () => {
    setSelectedSong(song.id);
    audio.pause();
    if (song.preview_url) {
      audio.setAttribute('src', song.preview_url);
      audio.load();
      audio.play();
    }
  };

  const handleCPause = () => {
    setSelectedSong(null);
    audio.pause();
    audio.setAttribute('src', '');
  };

  useEffect(() => () => {
    handleCPause();
  }, []);

  return (
    <div>
      <List className={classes.songList}>
        {songs.map(song => (
          <ListItem key={song.id} divider className={song.id === selectedSong ? classes.selectedSong : null}>
            <div className={classes.albumContainer}>
              <img src={song.album.images[2].url} alt="album art" />
              {song.preview_url ? (
                <div className={classes.playOverlay}>
                  <div className={classes.playIcon}>
                    {song.id === selectedSong ? (
                      <PauseIcon fontSize="large" onClick={handleCPause} />
                    ) : (
                      <PlayIcon fontSize="large" onClick={handlePlay(song)} />
                    )}
                  </div>
                </div>
              ) : null}
            </div>
            <ListItemText primary={song.name} secondary={song.album.name} className={classes.songText} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
