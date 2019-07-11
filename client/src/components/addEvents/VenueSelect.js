import React, { useRef, useEffect } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './styles/VenueSelectStyles';

const VenueSelect = ({ venues, selectedVenue, setSelectedVenue }) => {
  const classes = useStyles();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = e => {
    setSelectedVenue(e.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
        Select Venue
      </InputLabel>
      <Select
        value={selectedVenue}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="venue"
            className={classes.select}
            id="outlined-venue-simple"
          />
        }>
        {venues.map(venue => (
          <MenuItem key={venue.objectId} value={venue}>
            {venue.venueName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default VenueSelect;
