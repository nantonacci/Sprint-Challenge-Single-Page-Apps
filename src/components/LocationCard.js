import React from 'react';
import { Container, Image, Name, Stats } from './Styles.js';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Container>
      <Name>{name}</Name>
      <p>
        {type} - {dimension}
      </p>
      {/* <p>{residents}</p> */}
    </Container>
  );
}
