import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Button } from '../../../components';
import { Unit } from '../../../../helpers';
import { SeparatorContainer } from '../SeparatorContainer';
import { PictureGrid } from './PictureGrid';
import { ButtonsContainer } from './styles';

const { vh, vwPx } = Unit;

interface IProps {
  pictures: ImageSourcePropType[];
}

export function PictureSection({ pictures }: IProps) {
  return (
    <SeparatorContainer separatorText='Fotos'>
      <PictureGrid
        style={{ marginTop: vh(2) }}
        pictures={pictures}
        columns={3}
      />
      <ButtonsContainer style={{ marginTop: vh(1) }}>
        {pictures.length > 6 ? (
          <Button
            width={vwPx(44)}
            onPress={() => console.log('see more pictures pressed')}
          >
            Ver Mais
          </Button>
        ) : null}
        <Button
          isSecondary={pictures.length > 6}
          width={pictures.length > 6 ? vwPx(44) : vwPx(90)}
          onPress={() => console.log('edit pictures pressed')}
        >
          Editar
        </Button>
      </ButtonsContainer>
    </SeparatorContainer>
  );
}
