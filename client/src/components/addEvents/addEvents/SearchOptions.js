import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const SearchOptions = ({ venueOption, venueName, handleChange, onSelect }) => {
  const handleClick = e => {
    onSelect(venueOption);
    handleChange(venueName);
  };
  return (
    <MenuItem component="option" onClick={handleClick} value={venueName}>
      {venueName}
    </MenuItem>
  );
};

export default SearchOptions;
