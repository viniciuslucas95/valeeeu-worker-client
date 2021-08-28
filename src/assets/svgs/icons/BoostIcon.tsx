import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../../app/helpers';
import { colors } from '../../../configs';
import { IProps } from '../interfaces';

const { vw } = Unit;

export function BoostIcon({ size, style, color }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={15 * fixedSize}
      height={22 * fixedSize}
      viewBox='0 0 15 22'
      fill='none'
      style={style}
    >
      <Path
        d='M3.75 7.333H0L7.5 0 15 7.333h-3.75v4.584h-7.5V7.333zm0 6.417v1.833h7.5V13.75h-7.5zm0 3.68v1.82h7.5v-1.82h-7.5zm0 3.653V22h7.5v-.917h-7.5z'
        fill={color ?? colors.purple}
      />
    </Svg>
  );
}
