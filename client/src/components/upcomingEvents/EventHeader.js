import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SetlistIcon from '@material-ui/icons/Receipt';

import useStyles from './styles/EventStyles';
import EventArtistSelect from './EventArtistSelect';
import useFetchImage from '../../hooks/useFetchImage';
import { getSetlistArtists } from '../../api/setlistfmApi';

export default function EventHeader({ event }) {
  const classes = useStyles();
  const { artistSlug } = event.artist;
  const [image, loading] = useFetchImage(artistSlug, 'lg');
  const [open, setOpen] = useState(false);
  const [artistsList, setArtistsList] = useState([]);

  useEffect(() => {
    async function getArtists() {
      const artists = await getSetlistArtists(event.artist.artistName);
      setArtistsList(artists);
    }
    getArtists();
  }, [event.artist.artistName]);

  async function handleListOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    !loading && (
      <Card raised className={classes.header}>
        {image && (
          <CardMedia image={image} className={classes.cardMedia}>
            <div className={classes.title}>
              <h1>{event.title}</h1>
            </div>
            <div className={classes.setlistsButton}>
              <Button variant="contained" onClick={handleListOpen}>
                <SetlistIcon />
                Setlists
              </Button>
            </div>
          </CardMedia>
        )}
        {artistsList.length && (
          <EventArtistSelect artistsList={artistsList} open={open} onClose={handleClose} />
        )}
      </Card>
    )
  );
}
