import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { vw } from '../../../app/helpers/units';
import { IProps } from '../interfaces';

export function GoogleIcon({ size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 4;

  return (
    <Svg
      width={36 * fixedSize}
      height={36 * fixedSize}
      viewBox='0 0 36 36'
      fill='none'
      style={style}
    >
      <Rect width={36} height={36} rx={18} fill='#fff' />
      <Path
        d='M26.809 18.203c0-.593-.053-1.155-.143-1.703h-8.475v3.383h4.853c-.218 1.11-.855 2.047-1.8 2.684v2.25h2.895c1.695-1.567 2.67-3.877 2.67-6.614z'
        fill='#4285F4'
      />
      <Path
        d='M18.191 27c2.43 0 4.463-.81 5.948-2.183l-2.895-2.25c-.81.54-1.838.87-3.053.87-2.347 0-4.335-1.582-5.047-3.72h-2.985v2.318C11.636 24.975 14.674 27 18.19 27z'
        fill='#34A853'
      />
      <Path
        d='M13.144 19.718A5.223 5.223 0 0112.859 18c0-.6.105-1.177.285-1.718v-2.317h-2.985a8.895 8.895 0 000 8.07l2.985-2.317z'
        fill='#FBBC05'
      />
      <Path
        d='M18.191 12.563c1.328 0 2.513.457 3.45 1.35l2.565-2.566C22.654 9.893 20.621 9 18.191 9c-3.517 0-6.555 2.025-8.032 4.965l2.985 2.317c.712-2.137 2.7-3.72 5.047-3.72z'
        fill='#EA4335'
      />
    </Svg>
  );
}
