import React, { PropsWithChildren } from 'react';

import { Container, Line, Text } from './styles';

export function Separator({ children, style }: PropsWithChildren<any>) {
  return (
    <Container {...style}>
      <Line />
      <Text>{children}</Text>
      <Line />
    </Container>
  );
}
