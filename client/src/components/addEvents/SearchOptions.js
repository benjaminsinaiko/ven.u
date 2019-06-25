import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const SearchOptions = ({ artist, onClick }) => {
  const handleClick = () => {
    onClick(artist);
  };
  return <MenuItem onClick={handleClick}>{artist}</MenuItem>;
};

export default SearchOptions;
