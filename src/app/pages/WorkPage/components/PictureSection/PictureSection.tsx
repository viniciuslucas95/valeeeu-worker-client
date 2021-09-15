import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  Button,
  HorizontalContainer,
  PictureGrid,
  SeparatorContainer,
} from '../../../../../shared/app/components';
import { FlexDistribution } from '../../../../../shared/app/enums';
import { Unit } from '../../../../../shared/app/helpers';

const { vh, vwPx } = Unit;

interface IProps {
  pictures: ImageSourcePropType[];
}

export function PictureSection({ pictures }: IProps) {
  return (
    <SeparatorContainer title='Fotos'>
      <PictureGrid
        style={{ marginTop: vh(2) }}
        pictures={pictures}
        columns={3}
      />
      <HorizontalContainer
        style={{ marginTop: vh(1) }}
        flexDistribution={FlexDistribution.spaceBetween}
      >
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
      </HorizontalContainer>
    </SeparatorContainer>
  );
}
