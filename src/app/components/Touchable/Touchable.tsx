import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { OuterStyleContainer, TouchableContainer, Container } from './styles';

interface IProps {
  children: object;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
}

export function Touchable({
  children,
  onPress,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <OuterStyleContainer style={style}>
      <TouchableContainer onPress={onPress}>
        <Container>{children}</Container>
      </TouchableContainer>
    </OuterStyleContainer>
  );
}
