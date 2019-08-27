import React from 'react';

import { useUser } from '../../contexts/userContext';

export default function ProfilePage() {
  const { user } = useUser();
  console.log('user', user);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>{user.attributes.fullname}</p>
    </div>
  );
}
