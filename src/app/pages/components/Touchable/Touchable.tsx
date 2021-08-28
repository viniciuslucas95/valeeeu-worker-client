import React, { PropsWithChildren } from 'react';
import { IPressable, IStyleable } from '../interfaces';
import { OuterStyleContainer, TouchableContainer, Container } from './styles';

interface IProps extends IPressable, IStyleable {
  children: object;
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
