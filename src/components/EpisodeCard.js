import React from 'react';
import { Container, Image, Name, Stats } from './Styles.js';

export default function EpisodeCard({ name }) {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  );
}
