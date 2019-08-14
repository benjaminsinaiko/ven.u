import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles/EventStyles';
import useFetchBio from '../../hooks/useFetchBio';

export default function EventBio({ artist }) {
  const classes = useStyles();
  const [bio, loading] = useFetchBio(artist);
  const [open, setOpen] = useState(false);

  function handleOpenBio() {
    setOpen(!open);
  }

  return !loading && bio ? (
    <div className={classes.bioPanel}>
      <ExpansionPanel onChange={handleOpenBio}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography hidden={open}>{bio[0]}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column' }}>
          {bio[1]
            && bio[1].map((paragraph, i) => (
              <React.Fragment key={i}>
                <Typography>{paragraph}</Typography>
                <br />
              </React.Fragment>
            ))}
          <Typography>
            From <a href="https://www.lastfm.com">Last.fm</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  ) : null;
}
