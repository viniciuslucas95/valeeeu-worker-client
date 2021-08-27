import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Button } from '../../../../components';
import { vh, vw, vwPx } from '../../../../helpers/units';
import { SeparatorContainer } from '../SeparatorContainer';
import { PictureGrid } from './PictureGrid';

const car = require('../../../../../test/data/car.jpg');
const panicat = require('../../../../../test/data/panicat.jpg');

const pictures: ImageSourcePropType[] = [
  car,
  panicat,
  car,
  panicat,
  car,
  panicat,
  car,
];

export function PictureSection() {
  return (
    <SeparatorContainer separatorText='Fotos'>
      <PictureGrid
        style={{ marginTop: vh(2) }}
        pictures={pictures}
        width={vwPx(90)}
        columns={3}
      />
      <Button style={{ marginTop: vh(2) }}>Ver Mais</Button>
    </SeparatorContainer>
  );
}
