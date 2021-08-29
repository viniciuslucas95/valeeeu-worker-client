import React, { PropsWithChildren } from 'react';
import { Container } from './styles';

export function ButtonsContainer({ children }: PropsWithChildren<object>) {
  return <Container>{children}</Container>;
}
