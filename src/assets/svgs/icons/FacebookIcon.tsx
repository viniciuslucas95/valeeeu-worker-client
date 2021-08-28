import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Unit } from '../../../app/helpers';
import { IProps } from '../interfaces';

const { vw } = Unit;

export function FacebookIcon({ style, size }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={36 * fixedSize}
      height={36 * fixedSize}
      viewBox='0 0 36 36'
      fill='none'
      style={style}
    >
      <Path
        d='M36 18.11C36 8.104 27.944 0 18 0S0 8.105 0 18.11C0 27.148 6.582 34.64 15.188 36V23.345h-4.573V18.11h4.572v-3.99c0-4.539 2.686-7.046 6.8-7.046 1.969 0 4.029.354 4.029.354v4.454h-2.27c-2.236 0-2.933 1.396-2.933 2.828v3.4h4.992l-.799 5.235h-4.194V36C29.419 34.64 36 27.148 36 18.11z'
        fill='#fff'
      />
    </Svg>
  );
}
