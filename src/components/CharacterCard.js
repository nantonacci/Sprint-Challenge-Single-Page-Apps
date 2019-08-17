import React from 'react';

export default function CharacterCard({ name, species }) {
  return (
    <div>
      <p>{name}</p>
      <p>{species}</p>
      {/* <p>Location: {location}</p>
      <p>Origin: {origin}</p> */}
    </div>
  );
}
