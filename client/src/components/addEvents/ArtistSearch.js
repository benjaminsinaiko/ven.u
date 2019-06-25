import React, { useState, memo, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import useSearchArtists from '../../hooks/useSearchArtists.js';
import useInputState from '../../hooks/useInputState';

const ArtistSearch = ({ value, onChange, placeholder }) => {
  const [searchString, handleChange] = useInputState('');
  const [showOptions, setShowOptions] = useState(false);
  const { artists, loading } = useSearchArtists(searchString);

  const handleOnFocus = () => {
    setShowOptions(true);
  };
  const handleOnBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };

  useEffect(() => {
    return () => {
      console.log('*****ArtistSearch Rendered');
    };
  });

  return (
    <>
      <TextField
        value={value || searchString}
        onChange={handleChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        margin="normal"
        label={placeholder}
        type="search"
        fullWidth
      />
      {loading && <span style={{ color: 'black' }}>Loading...</span>}
      {showOptions && artists.length > 2 && (
        <div>
          {artists.map(artist => (
            <MenuItem key={artist.objectId} onClick={() => onChange(artist)}>
              {artist.artistName}
            </MenuItem>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(ArtistSearch);
