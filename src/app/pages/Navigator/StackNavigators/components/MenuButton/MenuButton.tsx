import React from 'react';
import { Touchable } from '../../../../components';
import { MenuIcon } from '../../../../../../assets/svgs/icons';
import { Unit } from '../../../../../helpers';
import { IStyleable } from '../../../../components/interfaces';

const { vw } = Unit;

export function MenuButton({ style }: IStyleable) {
  return (
    <Touchable
      onPress={() => console.log('menu pressed')}
      style={[{ marginRight: vw(5) }, style]}
    >
      <MenuIcon />
    </Touchable>
  );
}
