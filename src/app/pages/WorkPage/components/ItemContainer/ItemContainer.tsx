import React, { PropsWithChildren } from 'react';
import { Container } from './styles';
import { Item } from './Item';
import { IColorable, IStyleable } from '../../../components/interfaces';
import { IHaveBoldText } from './interface';

interface IProps extends IColorable, IStyleable, IHaveBoldText {
  children: string[];
}

export function ItemContainer({
  children,
  style,
  isSecondary,
  isTextBold,
}: PropsWithChildren<IProps>) {
  if (!children) return null;

  return (
    <Container style={style}>
      {children.map((item, index) => {
        return index < children.length - 1 ? (
          <Item
            key={index}
            hasSeparator
            isSecondary={isSecondary}
            isTextBold={isTextBold}
          >
            {item}
          </Item>
        ) : (
          <Item key={index} isSecondary={isSecondary} isTextBold={isTextBold}>
            {item}
          </Item>
        );
      })}
    </Container>
  );
}
