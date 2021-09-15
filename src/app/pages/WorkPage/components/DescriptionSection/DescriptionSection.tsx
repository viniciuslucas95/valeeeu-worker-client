import React from 'react';
import {
  Button,
  SeparatorContainer,
} from '../../../../../shared/app/components';
import { Unit } from '../../../../../shared/app/helpers';
import { LightText } from '../../../../../shared/app/styledComponents/Texts';
import { colors } from '../../../../../shared/configs';

const { vh } = Unit;

interface IProps {
  text: string;
}

export function DescriptionSection({ text }: IProps) {
  return (
    <SeparatorContainer title='Descrição'>
      <LightText color={colors.purple} style={{ marginTop: vh(1) }}>
        {text}
      </LightText>
      <Button
        style={{ marginTop: vh(2), marginBottom: vh(2) }}
        onPress={() => console.log('edit description pressed')}
      >
        Editar
      </Button>
    </SeparatorContainer>
  );
}
