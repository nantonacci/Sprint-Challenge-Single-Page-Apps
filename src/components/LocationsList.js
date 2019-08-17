import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        console.log(res);
        setLocations(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {locations.map(loc => (
        <LocationCard
          key={loc.id}
          name={loc.name}
          type={loc.type}
          dimension={loc.dimension}
          residents={loc.residents}
        />
      ))}
    </div>
  );
}
