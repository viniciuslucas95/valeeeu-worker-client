import React, { PropsWithChildren } from 'react';
import { IColorable, IHaveSize, IStyleable } from '../interfaces';
import { Container, Line, Text } from './styles';
import { Unit } from '../../../helpers';

const { vwPx } = Unit;

interface IProps extends IStyleable, Partial<IHaveSize>, IColorable {
  children: string;
}

export function Separator({
  children,
  width,
  style,
  isSecondary,
}: PropsWithChildren<IProps>) {
  return (
    <Container style={style} width={width ?? vwPx(90)}>
      <Line isSecondary={isSecondary} />
      <Text isSecondary={isSecondary}>{children}</Text>
      <Line isSecondary={isSecondary} />
    </Container>
  );
}
