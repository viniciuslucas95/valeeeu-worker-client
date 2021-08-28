import React, { PropsWithChildren, useState } from 'react';
import { Container, TouchableContainer, Text } from './styles';

export function Link({ children, style }: PropsWithChildren<any>) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
      >
        <Text isHighlighted={isHighlighted}>{children}</Text>
      </TouchableContainer>
    </Container>
  );
}
