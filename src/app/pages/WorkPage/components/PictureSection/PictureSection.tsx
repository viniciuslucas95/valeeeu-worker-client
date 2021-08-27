import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Button } from '../../../../components';
import { vh, vwPx } from '../../../../helpers/units';
import { SeparatorContainer } from '../SeparatorContainer';
import { PictureGrid } from './PictureGrid';
import { ButtonsContainer } from './styles';

interface IProps {
  pictures: ImageSourcePropType[];
}

export function PictureSection({ pictures }: IProps) {
  return (
    <SeparatorContainer separatorText='Fotos'>
      <PictureGrid
        style={{ marginTop: vh(2) }}
        pictures={pictures}
        width={vwPx(90)}
        columns={3}
      />
      <ButtonsContainer style={{ marginTop: vh(1) }}>
        {pictures.length > 6 ? (
          <Button width={vwPx(44)}>Ver Mais</Button>
        ) : null}
        <Button secondary width={pictures.length > 6 ? vwPx(44) : vwPx(90)}>
          Editar
        </Button>
      </ButtonsContainer>
    </SeparatorContainer>
  );
}
