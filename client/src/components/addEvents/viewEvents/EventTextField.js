import React from 'react';
import TextField from '@material-ui/core/TextField';

const EventTextField = ({ disabled = false, value, placeholder }) => {
  return <TextField disabled={disabled} value={value} label={placeholder} fullWidth />;
};

export default EventTextField;
