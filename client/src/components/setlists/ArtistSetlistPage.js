import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { getArtistSetlists } from '../../api/setlistfmApi';
import useStyles from './styles/ArtistSetlistPageStyles';
import SetlistPanels from './SetlistPanels';
import setlistLogo from '../../assets/sfm-logo.png';

export default function ArtistSetlistPage({
  location: {
    state: { artistInfo },
  },
}) {
  const classes = useStyles();
  const [setlists, setSetlists] = useState([]);
  const artistId = artistInfo.mbid;

  useEffect(() => {
    async function fetchSetlists() {
      const response = await getArtistSetlists(artistId);
      setSetlists(response);
    }
    fetchSetlists();
  }, [artistId]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography component="h1" className={classes.artistName}>
          {artistInfo.name}
        </Typography>
        <Typography variant="body2">Setlists</Typography>
      </div>
      {setlists ? (
        <div className={classes.setlists}>
          <SetlistPanels setlists={setlists} />
        </div>
      ) : (
        <Paper elevation={10} className={classes.noSetlists}>
          <Typography variant="h4">No setlists found...</Typography>
          <Typography variant="body1">
            Add at <a href="https://www.setlist.fm/">Setlist.fm</a>
          </Typography>
        </Paper>
      )}
      <div className={classes.attribution}>
        <Typography>Powered by</Typography>
        <img src={setlistLogo} alt="setlist.fm logo" />
      </div>
    </div>
  );
}
