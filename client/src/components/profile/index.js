import React from 'react';
import { Redirect } from 'react-router-dom';

import { useUser } from '../../contexts/userContext';
import ProfileHeader from './ProfileHeader';
import ProfileStat from './ProfileStats';

export default function ProfilePage() {
  const { user } = useUser();

  return (
    <div>
      {!user && <Redirect to="/" />}
      <ProfileHeader user={user} />
      <ProfileStat history={user.history} />
    </div>
  );
}
