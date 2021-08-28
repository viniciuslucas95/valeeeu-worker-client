import React from 'react';
import { Button } from '../../../components';
import { Unit } from '../../../../helpers';
import { SeparatorContainer } from '../SeparatorContainer';
import { Text } from './styles';

const { vh } = Unit;

interface IProps {
  text: string;
}

export function DescriptionSection({ text }: IProps) {
  return (
    <SeparatorContainer separatorText='Descrição'>
      <Text style={{ marginTop: vh(1) }}>{text}</Text>
      <Button
        style={{ marginTop: vh(2), marginBottom: vh(2) }}
        onPress={() => console.log('edit description pressed')}
      >
        Editar
      </Button>
    </SeparatorContainer>
  );
}
