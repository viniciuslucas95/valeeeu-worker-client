import React, { PropsWithChildren, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableContainer, ButtonContainer, Text, Container } from './styles';

interface IProps {
  onPress?(): void;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
  width?: string;
  small?: boolean;
  icon?: object;
}

export function Button({
  children,
  onPress,
  style,
  secondary,
  icon,
  small,
  width,
}: PropsWithChildren<IProps>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container style={style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
        onPress={() => {
          if (onPress) onPress();
        }}
      >
        <ButtonContainer
          secondary={secondary}
          highlight={isHighlighting}
          width={width}
          small={small}
        >
          <Text secondary={secondary} small={small} highlight={isHighlighting}>
            {children}
          </Text>
          {icon}
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
