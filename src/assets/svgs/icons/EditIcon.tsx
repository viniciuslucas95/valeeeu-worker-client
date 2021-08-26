import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { vw } from '../../../app/helpers/units';

interface IProps {
  size?: number;
  style?: any;
}

export function EditIcon({ size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 5;

  return (
    <Svg
      width={24 * fixedSize}
      height={24 * fixedSize}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...style}
    >
      <Rect width={24} height={24} rx={12} fill='#fff' />
      <Path
        d='M12.698 8.73l2.572 2.572-5.585 5.585-2.293.253a.482.482 0 01-.532-.533l.255-2.294 5.583-5.583zm4.162-.383L15.653 7.14a.965.965 0 00-1.364 0l-1.136 1.136 2.571 2.572 1.136-1.136a.965.965 0 000-1.365z'
        fill='#834FD9'
      />
    </Svg>
  );
}
