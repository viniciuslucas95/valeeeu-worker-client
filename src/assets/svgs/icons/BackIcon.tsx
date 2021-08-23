import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vh, vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  fillColor?: string;
  size?: number;
  props?: any;
}

export function BackIcon({ fillColor, size, props }: IProps) {
  const fixedSize = (size ?? vw(1)) / 5;

  return (
    <Svg
      width={17 * fixedSize}
      height={28 * fixedSize}
      viewBox={'0 0 17 28'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      style={{ marginBottom: vh(0.5) }}
    >
      <Path
        d={
          'M12.256 1.61a2 2 0 012.992.168l.652.826a2 2 0 01-.157 2.653l-7.329 7.329a2 2 0 000 2.828l7.33 7.33a2 2 0 01.156 2.652l-.652.826a2 2 0 01-2.992.169L1.39 15.406a2 2 0 010-2.812L12.256 1.609z'
        }
        fill={fillColor ?? theme.purple}
      />
    </Svg>
  );
}
