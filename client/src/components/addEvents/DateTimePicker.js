import React from 'react';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles/DateTimePickerStyles';

const DateTimePicker = ({ label, value, onChange }) => {
  const classes = useStyles();

  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label={label}
        type="datetime-local"
        defaultValue={value}
        onChange={handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};

export default DateTimePicker;
