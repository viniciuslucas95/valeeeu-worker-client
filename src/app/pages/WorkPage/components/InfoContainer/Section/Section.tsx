import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container, Title, Text } from './styles';

interface IProps {
  title: string;
  children: object | string;
  style?: StyleProp<ViewStyle>;
}

export function Section({ title, children, style }: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </Container>
  );
}
