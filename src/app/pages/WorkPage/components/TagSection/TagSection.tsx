import React from 'react';
import { Button } from '../../../components';
import { Unit } from '../../../../helpers';
import { ItemContainer } from '../ItemContainer';
import { SeparatorContainer } from '../SeparatorContainer';

const { vh } = Unit;

interface IProps {
  tags: string[];
}

export function TagSection({ tags }: IProps) {
  return (
    <SeparatorContainer separatorText='Palavras-chave'>
      <ItemContainer isTextBold isSecondary style={{ marginTop: vh(0.5) }}>
        {tags}
      </ItemContainer>
      <Button
        style={{ marginTop: vh(2) }}
        onPress={() => console.log('edit tag pressed')}
      >
        Editar
      </Button>
    </SeparatorContainer>
  );
}
