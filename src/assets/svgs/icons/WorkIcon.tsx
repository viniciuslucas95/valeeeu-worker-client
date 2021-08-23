import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vh, vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  thick?: boolean;
  size?: number;
  props?: any;
}

export function WorkIcon({ thick, size, props }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={33 * fixedSize}
      height={28 * fixedSize}
      viewBox={'0 0 33 28'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      style={{ marginBottom: vh(0.5) }}
    >
      <Path
        d={
          'M28.6 10.436a.5.5 0 01.5.5v12.628a.5.5 0 01-.5.5H4.4a.5.5 0 01-.5-.5V10.936a.5.5 0 01.5-.5h24.2zM32.5 8.5A1.5 1.5 0 0031 7H2A1.5 1.5 0 00.5 8.5V26A1.5 1.5 0 002 27.5h29a1.5 1.5 0 001.5-1.5V8.5zM12.625.5a3.093 3.093 0 00-3.083 3.1v1.6a1.5 1.5 0 001.5 1.5h.583a1.5 1.5 0 001.5-1.5v-.95c0-.086.069-.15.146-.15h6.458c.078 0 .146.064.146.15v.95a1.5 1.5 0 001.5 1.5h.583a1.5 1.5 0 001.5-1.5V3.6c0-1.708-1.378-3.1-3.083-3.1h-7.75z'
        }
        fill={theme.white}
        stroke={theme.purple}
        strokeWidth={thick ? 0 : 1.25}
      />
    </Svg>
  );
}
