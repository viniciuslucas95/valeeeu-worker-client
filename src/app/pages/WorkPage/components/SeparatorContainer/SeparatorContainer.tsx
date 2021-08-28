import React, { PropsWithChildren } from 'react';
import { Separator } from '../../../components';
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
      <Separator>{separatorText}</Separator>
      {children}
    </Container>
  );
}
