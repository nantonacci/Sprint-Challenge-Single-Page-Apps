import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        console.log(res);
        setEpisodes(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {episodes.map(ep => (
        <EpisodeCard key={ep.id} name={ep.name} />
      ))}
    </div>
  );
}
