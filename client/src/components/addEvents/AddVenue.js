import React from 'react';
import TextField from '@material-ui/core/TextField';

const AddVenue = ({ value, onChange, placeholder }) => {
  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value);
  };
  return <TextField value={value} onChange={handleChange} label={placeholder} fullWidth />;
};

export default AddVenue;
