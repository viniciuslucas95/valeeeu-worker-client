import React from 'react';
import { Button } from '../../../../components';
import { vh } from '../../../../helpers/units';
import { ItemContainer } from '../ItemContainer';
import { SeparatorContainer } from '../SeparatorContainer';

interface IProps {
  tags: string[];
}

export function TagSection({ tags }: IProps) {
  return (
    <SeparatorContainer separatorText='Palavras-chave'>
      <ItemContainer bold secondary style={{ marginTop: vh(0.5) }}>
        {tags}
      </ItemContainer>
      <Button style={{ marginTop: vh(2) }}>Editar</Button>
    </SeparatorContainer>
  );
}
