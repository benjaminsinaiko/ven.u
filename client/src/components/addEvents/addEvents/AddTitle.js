import React from 'react';
import TextField from '@material-ui/core/TextField';

const AddTitle = ({ value, name, handleChange, placeholder }) => {
  const onChange = e => {
    // e.preventDefault();
    console.log(name);
    return { [name]: e.target.value };
    // onChange(f => ({ [f.name]: e.target.value }));
  };
  return <TextField value={value} onChange={onChange} label={placeholder} fullWidth />;
};

export default AddTitle;
