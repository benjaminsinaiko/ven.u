import React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from '../../contexts/userContext';
import ProfileHeader from './ProfileHeader';
import ProfileStatBoxes from './ProfileStatBoxes';

export default function ProfilePage() {
  const { user } = useUser();
  // console.log('user', user);

  return (
    <div>
      {!user && <Redirect to="/" />}
      <ProfileHeader user={user} />
      <ProfileStatBoxes history={user.history} />
    </div>
  );
}
