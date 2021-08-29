import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../../app/helpers';
import { colors } from '../../../configs';
import { IProps } from '../interfaces';

const { vw } = Unit;

export function ArrowIcon({ size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={14 * fixedSize}
      height={26 * fixedSize}
      viewBox='0 0 14 26'
      fill='none'
      style={style}
    >
      <Path
        d='M11.823 1.036a1.11 1.11 0 111.575 1.566l-8.984 8.984a2 2 0 000 2.828l8.984 8.984a1.11 1.11 0 11-1.575 1.566L1.39 14.406a2 2 0 010-2.812L11.823 1.036z'
        fill={colors.white}
      />
    </Svg>
  );
}
