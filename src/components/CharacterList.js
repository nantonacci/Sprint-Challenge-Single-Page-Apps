import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res);
        setChars(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list grid-view">
      {chars.map(char => (
        <CharacterCard
          key={char.id}
          image={char.image}
          name={char.name}
          species={char.species}
          status={char.status}
        />
      ))}
    </section>
  );
}
