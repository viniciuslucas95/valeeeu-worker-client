import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  thick?: boolean;
  size?: number;
  props?: any;
}

export function ProfileIcon({ thick, size, props }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={32 * fixedSize}
      height={32 * fixedSize}
      viewBox={'0 0 32 32'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d={
          'M23.409 22.086h0l-.107-.024a35.15 35.15 0 01-1.933-.483c-.626-.183-1.163-.387-1.566-.635-.402-.248-.647-.526-.737-.85-.09-.325-.04-.75.266-1.328h0c1.982-3.744 2.276-6.675 1.488-8.693C20.026 8.04 18.16 7 16 7c-2.203 0-4.072 1.08-4.856 3.132-.778 2.037-.464 4.967 1.525 8.636h0c.315.58.365 1.008.273 1.332-.092.326-.342.605-.752.854s-.952.451-1.578.633c-.574.166-1.203.311-1.847.46l-.174.04c-1.19.274-1.904.71-2.317 1.347A12.184 12.184 0 013.75 16C3.75 9.246 9.246 3.75 16 3.75S28.25 9.246 28.25 16c0 2.792-.942 5.366-2.52 7.43-.416-.637-1.133-1.07-2.321-1.344zM16 .75C7.578.75.75 7.578.75 16S7.578 31.25 16 31.25 31.25 24.422 31.25 16 24.422.75 16 .75z'
        }
        fill={theme.white}
        stroke={theme.purple}
        strokeWidth={thick ? 0 : 1.25}
      />
    </Svg>
  );
}
