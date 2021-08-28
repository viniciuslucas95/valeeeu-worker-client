import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../../app/helpers';
import { colors } from '../../../configs';
import { ITabIcon } from './interfaces';

const { vw } = Unit;

export function ScheduleIcon({ isActive, size, style }: ITabIcon) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={22 * fixedSize}
      height={22 * fixedSize}
      viewBox='0 0 22 22'
      fill='none'
      style={style}
    >
      {isActive ? (
        <Path
          d='M11.817 11v.1H16.4v1.633h-6.217V5.6h1.634V11zm8.45 0c0-5.11-4.157-9.267-9.267-9.267-5.11 0-9.267 4.157-9.267 9.267 0 5.11 4.157 9.267 9.267 9.267 5.11 0 9.267-4.157 9.267-9.267zM.1 11C.1 4.98 4.98.1 11 .1 17.02.1 21.9 4.98 21.9 11c0 6.02-4.88 10.9-10.9 10.9C4.98 21.9.1 17.02.1 11z'
          fill={colors.white}
          stroke={colors.purple}
          strokeWidth={0}
        />
      ) : (
        <Path
          d='M11.717 11v.2H16.3v1.433h-6.017V5.7h1.434V11zm8.65 0c0-5.165-4.202-9.367-9.367-9.367-5.165 0-9.367 4.202-9.367 9.367 0 5.165 4.202 9.367 9.367 9.367 5.165 0 9.367-4.202 9.367-9.367zM.2 11C.2 5.036 5.036.2 11 .2S21.8 5.036 21.8 11 16.964 21.8 11 21.8.2 16.964.2 11z'
          fill={colors.white}
          stroke={colors.purple}
          strokeWidth={0.4}
        />
      )}
    </Svg>
  );
}
