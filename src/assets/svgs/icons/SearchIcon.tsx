import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  thick?: boolean;
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  props?: any;
}

export function SearchIcon({
  thick,
  size,
  fillColor,
  strokeColor,
  props,
}: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={33 * fixedSize}
      height={33 * fixedSize}
      viewBox={'0 0 33 33'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d={
          'M28.09 31.352l.353.356.355-.354 2.556-2.556.354-.355-.355-.353-9.18-9.126c1.53-2.011 1.626-4.213 1.626-6.815C23.799 5.715 18.582.5 12.149.5S.5 5.715.5 12.15c0 6.433 5.215 11.649 11.65 11.649 2.6 0 4.803-.095 6.814-1.626l9.126 9.18zM12.15 19.368a7.208 7.208 0 01-7.22-7.219 7.208 7.208 0 017.22-7.218 7.208 7.208 0 017.218 7.218 7.208 7.208 0 01-7.219 7.219z'
        }
        fill={fillColor ?? theme.white}
        stroke={strokeColor ?? theme.purple}
        strokeWidth={thick ? 0 : 2}
      />
    </Svg>
  );
}
