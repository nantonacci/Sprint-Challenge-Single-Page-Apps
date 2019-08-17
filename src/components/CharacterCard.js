import React from 'react';
import { Container, Image, Name, Stats } from './Styles.js';

export default function CharacterCard({ image, name, species, status }) {
  return (
    <Container>
      <Image src={image} />
      <Name>{name}</Name>
      <Stats>
        {species} - {status}
      </Stats>
    </Container>
  );
}
