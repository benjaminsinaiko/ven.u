import React, { useState, useEffect } from 'react';

import { getArtistSetlists } from '../../api/setlistfmApi';
import SetlistPanels from './SetlistPanels';

export default function ArtistSetlistPage({ location: { state: { artistInfo } } }) {
  const [setlists, setSetlists] = useState([]);
  const artistId = artistInfo.mbid;

  useEffect(() => {
    async function fetchSetlists() {
      const response = await getArtistSetlists(artistId);
      setSetlists(response);
    }
    fetchSetlists();
  }, [artistId]);

  console.log('setlists', setlists);

  return (
    <div>
      <h1>{artistInfo.name}</h1>
      {setlists && <SetlistPanels setlists={setlists} />}
    </div>
  );
}
