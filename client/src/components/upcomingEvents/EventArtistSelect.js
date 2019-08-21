import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const artistsList = [
  {
    mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
    tmid: 1195873,
    name: 'Bon Iver',
    sortName: 'Bon Iver',
    disambiguation: '',
    url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
  },
  {
    mbid: '451f4018-c8d6-4c01-9dcc-7eadaf1c764b',
    name: 'Bon Iver & St. Vincent',
    sortName: 'Bon Iver & St. Vincent',
    url: 'https://www.setlist.fm/setlists/bon-iver-and-st-vincent-5bd43f44.html',
  },
  {
    mbid: '9dcb50b0-558a-4145-92de-d31bbf185d40',
    name: 'James Blake feat. Bon Iver',
    sortName: 'Blake, James feat. Bon Iver',
    url: 'https://www.setlist.fm/setlists/james-blake-feat-bon-iver-1bc3a934.html',
  },
  {
    mbid: 'a97d00c9-f9b0-463a-ba58-8a5bc1fe69ec',
    name: 'James Blake With Bon Iver',
    sortName: 'Blake, James With Bon Iver',
    url: 'https://www.setlist.fm/setlists/james-blake-with-bon-iver-6bd31ef2.html',
  },
  {
    mbid: '4144568d-e208-4ed7-bbc3-38dae9e74319',
    name: 'James Blake & Bon Iver',
    sortName: 'Blake, James & Bon Iver',
    url: 'https://www.setlist.fm/setlists/james-blake-and-bon-iver-73d0e2e9.html',
  },
];

export default function EventArtistSelect({ onClose, open }) {
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
          <ListItem button divider={i !== artistsList.length - 1} component={Link} to={{ pathname: '/setlists', state: { artistInfo: artist } }} onClick={() => handleListItemClick(artist)} key={artist.mbid}>
            <ListItemText>{artist.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
