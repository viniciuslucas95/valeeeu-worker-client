import React from 'react';
import {
  Button,
  HorizontalTextList,
  SeparatorContainer,
} from '../../../../../shared/app/components';
import { Fonts } from '../../../../../shared/app/enums';
import { Unit } from '../../../../../shared/app/helpers';
import { colors } from '../../../../../shared/configs';

const { vh } = Unit;

interface IProps {
  tags: string[];
}

export function TagSection({ tags }: IProps) {
  return (
    <SeparatorContainer title='Palavras-chave'>
      <HorizontalTextList
        isSecondary
        style={{ marginTop: vh(0.5) }}
        font={Fonts.mediumItalic}
        texts={tags}
      />
      <Button
        style={{ marginTop: vh(2) }}
        onPress={() => console.log('edit tag pressed')}
      >
        Editar
      </Button>
    </SeparatorContainer>
  );
}
