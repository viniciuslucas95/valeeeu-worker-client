import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container } from './styles';
import { Item } from './Item';

interface IProps {
  children: string[];
  style?: StyleProp<ViewStyle>;
}

export function ItemContainer({ children, style }: PropsWithChildren<IProps>) {
  return (
    <Container style={style}>
      {children.map((item, index) => {
        return index < children.length - 1 ? (
          <Item key={index} separator>
            {item}
          </Item>
        ) : (
          <Item key={index}>{item}</Item>
        );
      })}
    </Container>
  );
}
