import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function EventArtistSelect({ artistsList, onClose, open }) {
  function handleClose() {
    onClose();
  }

  function handleListItemClick() {
    handleClose();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="artist-select-dialog" open={open}>
      <DialogTitle id="artist-select-dialog">Select Artist</DialogTitle>
      <List>
        {artistsList.map((artist, i) => (
          <ListItem
            button
            divider={i !== artistsList.length - 1}
            component={Link}
            to={{ pathname: '/setlists', state: { artistInfo: artist } }}
            onClick={() => handleListItemClick(artist)}
            key={artist.mbid}>
            <ListItemText>{artist.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
