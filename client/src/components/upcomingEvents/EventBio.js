import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/EventStyles';
import useFetchBio from '../../hooks/useFetchBio';

export default function EventBio({ artist }) {
  const classes = useStyles();
  const [bio, loading] = useFetchBio(artist);

  return !loading && bio ? (
    <Paper className={classes.bioPanel}>
      {bio.map((paragraph, i) => (
        <React.Fragment key={i}>
          <Typography>{paragraph}</Typography>
          <br />
        </React.Fragment>
      ))}
      <Typography className={classes.bioSource}>
        From <a href="https://www.lastfm.com">Last.fm</a>
      </Typography>
    </Paper>
  ) : null;
}
