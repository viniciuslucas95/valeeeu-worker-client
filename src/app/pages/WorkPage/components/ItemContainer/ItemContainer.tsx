import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container } from './styles';
import { Item } from './Item';

interface IProps {
  children: string[];
  style?: StyleProp<ViewStyle>;
  secondary?: boolean;
  bold?: boolean;
}

export function ItemContainer({
  children,
  style,
  secondary,
  bold,
}: PropsWithChildren<IProps>) {
  if (!children) return null;

  return (
    <Container style={style}>
      {children.map((item, index) => {
        return index < children.length - 1 ? (
          <Item key={index} separator secondary={secondary} bold={bold}>
            {item}
          </Item>
        ) : (
          <Item key={index} secondary={secondary} bold={bold}>
            {item}
          </Item>
        );
      })}
    </Container>
  );
}
