import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
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

  return !loading ? (
    <div className={classes.bioPanel}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.bioHeading}>{artist} Biography</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column' }}>
          {bio.map((paragraph, i) => (
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
