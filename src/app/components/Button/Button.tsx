import React, { PropsWithChildren, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Sizes } from '../enums';
import { TouchableContainer, ButtonContainer, Text, Container } from './styles';

interface IProps {
  onPress?(): void;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
  width?: string;
  size?: Sizes;
  icon?: object;
}

export function Button({
  children,
  onPress,
  style,
  secondary,
  icon,
  size,
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
          size={size ?? Sizes.medium}
        >
          <Text
            secondary={secondary}
            size={size ?? Sizes.medium}
            highlight={isHighlighting}
          >
            {children}
          </Text>
          {icon}
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
