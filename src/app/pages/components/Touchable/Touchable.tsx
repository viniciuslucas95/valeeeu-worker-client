import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { IPressable, IStyleable } from '../interfaces';
import { OuterStyleContainer, TouchableContainer, Container } from './styles';

interface IProps extends IPressable, IStyleable {
  children: object;
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

export function Touchable({
  children,
  onPress,
  style,
  buttonContainerStyle,
}: PropsWithChildren<IProps>) {
  return (
    <OuterStyleContainer style={style}>
      <TouchableContainer onPress={onPress}>
        <Container style={buttonContainerStyle}>{children}</Container>
      </TouchableContainer>
    </OuterStyleContainer>
  );
}
