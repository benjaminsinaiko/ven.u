import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles/ProfilePageStyles';

export default function ProfileHeader({ user }) {
  const classes = useStyles();
  const [imgError, setImgError] = useState(false);
  const { fullname } = user.attributes;

  function handleImgError() {
    setImgError(true);
  }

  function getInitials(fullName) {
    const splitName = fullName.split(' ');
    const initials = splitName.reduce((acc, cur) => acc + cur[0], '').toUpperCase();
    if (initials.length > 2) {
      return initials[0] + initials[initials.length - 1];
    }
    return initials;
  }

  return (
    <div className={classes.headerRoot}>
      {imgError ? (
        <Avatar className={classes.avatar} alt="User Intials">
          {fullname ? getInitials(fullname) : null}
        </Avatar>
      ) : (
        <Avatar
          className={classes.avatar}
          alt="User Avatar"
          src={user.attributes.avatar._url}
          display={imgError ? 'none' : 'inherit'}
          onError={handleImgError}
        />
      )}
      {fullname && <Typography>{fullname}</Typography>}
    </div>
  );
}
