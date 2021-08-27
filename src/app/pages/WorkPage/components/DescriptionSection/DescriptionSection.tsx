import React from 'react';
import { Button } from '../../../../components';
import { vh } from '../../../../helpers/units';
import { SeparatorContainer } from '../SeparatorContainer';
import { Text } from './styles';

interface IProps {
  text: string;
}

export function DescriptionSection({ text }: IProps) {
  return (
    <SeparatorContainer separatorText='Descrição'>
      <Text style={{ marginTop: vh(1) }}>{text}</Text>
      <Button style={{ marginTop: vh(2) }}>Editar</Button>
    </SeparatorContainer>
  );
}
