import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  secondary?: boolean;
  size?: number;
  style?: any;
}

export function MenuIcon({ secondary, size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={26 * fixedSize}
      height={24 * fixedSize}
      viewBox='0 0 26 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...style}
    >
      <Rect
        y={20}
        width={26}
        height={4}
        rx={2}
        fill={secondary ? theme.purple : theme.white}
      />
      <Rect
        y={10}
        width={26}
        height={4}
        rx={2}
        fill={secondary ? theme.purple : theme.white}
      />
      <Path
        d='M0 2a2 2 0 012-2h22a2 2 0 110 4H2a2 2 0 01-2-2z'
        fill={secondary ? theme.purple : theme.white}
      />
    </Svg>
  );
}
