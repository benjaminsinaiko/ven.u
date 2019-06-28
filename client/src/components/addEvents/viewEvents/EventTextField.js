import React from 'react';
import TextField from '@material-ui/core/TextField';

const EventTextField = ({ readOnly = false, value, placeholder }) => {
  return (
    <TextField
      value={value}
      label={placeholder}
      InputProps={{
        readOnly: readOnly
      }}
      fullWidth
    />
  );
};

export default EventTextField;
