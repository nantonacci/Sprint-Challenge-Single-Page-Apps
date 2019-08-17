import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 3px;
  width: 290px;
  margin: 25px;
`;

const Image = styled.img`
  width: 288px;
  border-radius: 3px;
`;

const Name = styled.h3``;

const Stats = styled.p`
  font-weight: 300;
  color: grey;
`;

export { Container, Image, Name, Stats };
