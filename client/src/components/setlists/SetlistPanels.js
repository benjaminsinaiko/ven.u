import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles/SetlistPageStyles';
import { setlistDate } from '../../utils/dateTime';
import SetlistCard from './SetlistCard';

export default function SetlistPanels({ setlists }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {setlists.map(setlist => (
        <ExpansionPanel key={setlist.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography className={classes.heading}>{setlistDate(setlist.eventDate)}</Typography>
            <Typography className={classes.secondaryHeading}>
              {setlist.venue.city.name},{' '}
              {setlist.venue.city.country.name === 'United States'
                ? setlist.venue.city.stateCode
                : setlist.venue.city.country.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <SetlistCard event={setlist} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
