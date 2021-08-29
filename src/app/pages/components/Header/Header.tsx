import React from 'react';
import { Container, LeftHeaderSide, RightHeaderSide } from './styles';

interface IProps {
  leftSide?: object;
  rightSide?: object;
}

export function Header({ leftSide, rightSide }: IProps) {
  return (
    <Container>
      <LeftHeaderSide>{leftSide}</LeftHeaderSide>
      <RightHeaderSide>{rightSide}</RightHeaderSide>
    </Container>
  );
}
