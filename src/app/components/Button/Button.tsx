import React, { PropsWithChildren, useState } from 'react';

import { TouchableContainer, ButtonContainer, Text, Container } from './styles';

interface IProps {
  onPress?(): void;
  secondary?: boolean;
  style?: any;
}

export function Button({
  children,
  onPress,
  style,
  secondary,
}: PropsWithChildren<IProps>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        <ButtonContainer secondary={secondary} highlight={isHighlighting}>
          <Text secondary={secondary} highlight={isHighlighting}>
            {children}
          </Text>
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
