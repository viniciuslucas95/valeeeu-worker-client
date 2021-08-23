import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

import { vw } from '../../app/helpers/units';
import { theme } from '../../configs/constants';

interface IProps {
  size?: number;
  filled?: boolean;
}

export function CheckBoxSvg({ size, filled }: IProps) {
  const adjustedSize = ((size ?? vw(1)) / 3.6) * 15;

  return (
    <Svg
      width={adjustedSize}
      height={adjustedSize}
      viewBox='0 0 15 15'
      fill='none'
    >
      <Rect
        x={0.5}
        y={0.5}
        width={14}
        height={14}
        rx={7}
        fill={filled ? theme.darkGray : theme.white}
        stroke={filled ? theme.darkGray : theme.mediumGray}
        strokeWidth={1}
      />
    </Svg>
  );
}
