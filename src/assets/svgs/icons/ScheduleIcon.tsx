import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../../app/helpers';
import { colors } from '../../../configs';
import { IProps } from '../interfaces';

const { vw } = Unit;

export function ScheduleIcon({ size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={22 * fixedSize}
      height={22 * fixedSize}
      viewBox='0 0 22 22'
      fill='none'
      style={style}
    >
      <Path
        d='M11.717 11v.2H16.3v1.433h-6.017V5.7h1.434V11zm8.65 0c0-5.165-4.202-9.367-9.367-9.367-5.165 0-9.367 4.202-9.367 9.367 0 5.165 4.202 9.367 9.367 9.367 5.165 0 9.367-4.202 9.367-9.367zM.2 11C.2 5.036 5.036.2 11 .2S21.8 5.036 21.8 11 16.964 21.8 11 21.8.2 16.964.2 11z'
        fill={colors.white}
        stroke={colors.purple}
        strokeWidth={0.4}
      />
    </Svg>
  );
}
