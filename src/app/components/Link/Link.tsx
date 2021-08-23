import React, { PropsWithChildren, useState } from 'react';

import { Container, TouchableContainer, Text } from './styles';

export function Link({ children, style }: PropsWithChildren<any>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
      >
        <Text highlight={isHighlighting}>{children}</Text>
      </TouchableContainer>
    </Container>
  );
}
