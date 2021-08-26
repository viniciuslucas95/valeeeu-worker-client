import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  secondary?: boolean;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export function MenuIcon({ secondary, size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={26 * fixedSize}
      height={22 * fixedSize}
      viewBox='0 0 26 22'
      fill='none'
      style={style}
    >
      <Rect
        y={19.608}
        width={26}
        height={2}
        rx={1}
        fill={secondary ? theme.purple : theme.white}
      />
      <Rect
        y={9.804}
        width={26}
        height={2}
        rx={1}
        fill={secondary ? theme.purple : theme.white}
      />
      <Path
        d='M0 1a1 1 0 011-1h24a1 1 0 110 2H1a1 1 0 01-1-1z'
        fill={secondary ? theme.purple : theme.white}
      />
    </Svg>
  );
}
