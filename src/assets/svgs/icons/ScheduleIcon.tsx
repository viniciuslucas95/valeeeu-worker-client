import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  thick?: boolean;
  size?: number;
  style?: any;
}

export function ScheduleIcon({ thick, size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={32 * fixedSize}
      height={32 * fixedSize}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...style}
    >
      <Path
        d='M23.5 15.5h-5.75V8h-3.5v11H24v-3.5h-.5zM16 4c6.616 0 12 5.384 12 12s-5.384 12-12 12S4 22.616 4 16 9.384 4 16 4zm0-3.5C7.44.5.5 7.44.5 16c0 8.56 6.94 15.5 15.5 15.5 8.56 0 15.5-6.94 15.5-15.5C31.5 7.44 24.56.5 16 .5z'
        fill={theme.white}
        stroke={thick ? theme.white : theme.purple}
        strokeWidth={thick ? 0.5 : 1}
      />
    </Svg>
  );
}
