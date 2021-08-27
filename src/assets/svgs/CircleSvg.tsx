import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { vh, vw } from '../../app/helpers/units';
import { theme } from '../../configs/constants';

interface IProps {
  size?: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
  bold?: boolean;
}

export function CircleSvg({ size, style, color, bold }: IProps) {
  const adjustedSize = (size ?? vw(1)) / 2.25;

  return (
    <Svg
      width={3 * adjustedSize}
      height={3 * adjustedSize}
      viewBox='0 0 3 3'
      fill='none'
      style={[{ alignSelf: 'center', top: bold ? vh(0.2) : vh(0.1) }, style]}
    >
      <Circle cx={1.5} cy={1.5} r={1.5} fill={color ? color : theme.purple} />
    </Svg>
  );
}
