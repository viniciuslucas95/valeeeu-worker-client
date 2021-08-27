import React, { PropsWithChildren } from 'react';
import { Separator } from '../../../../components';
import { vh } from '../../../../helpers/units';
import { Container } from './styles';

interface IProps {
  separatorText: string;
  children: object;
}

export function SeparatorContainer({
  separatorText,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <Container>
      <Separator secondary>{separatorText}</Separator>
      {children}
    </Container>
  );
}
