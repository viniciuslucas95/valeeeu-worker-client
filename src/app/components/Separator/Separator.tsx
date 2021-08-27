import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container, Line, Text } from './styles';

interface IProps {
  size?: string;
  children: string;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Separator({
  children,
  size,
  style,
  secondary,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style} size={size}>
      <Line secondary={secondary} />
      <Text secondary={secondary}>{children}</Text>
      <Line secondary={secondary} />
    </Container>
  );
}
