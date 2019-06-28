import React from 'react';
import TextField from '@material-ui/core/TextField';

const AddVenue = ({ value, onChange }) => {
  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value);
  };
  return (
    <TextField
      value={value.venueName || ''}
      onChange={handleChange}
      label={'Select Venue Above'}
      fullWidth
    />
  );
};

export default AddVenue;
