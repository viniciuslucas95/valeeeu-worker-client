import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { vw } from '../../app/helpers/units';
import { colors } from '../../configs';
import { IProps } from './interfaces';

export function CircleSvg({ size, style, color }: IProps) {
  const fixedSize = (size ?? vw(1)) / 2.25;

  return (
    <Svg
      width={3 * fixedSize}
      height={3 * fixedSize}
      viewBox='0 0 3 3'
      fill='none'
      style={[{ alignSelf: 'center' }, style]}
    >
      <Circle cx={1.5} cy={1.5} r={1.5} fill={color ?? colors.purple} />
    </Svg>
  );
}
