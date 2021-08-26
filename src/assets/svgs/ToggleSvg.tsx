import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { vw } from '../../app/helpers/units';
import { theme } from '../../configs/constants';

interface IProps {
  activeColor?: string;
  inactiveColor?: string;
  isActive?: boolean;
  style?: any;
  size?: number;
}

export function ToggleSvg({
  activeColor,
  inactiveColor,
  style,
  isActive,
  size,
}: IProps) {
  const fixedSize = size ? size / 4 : vw(1) / 4;

  return (
    <Svg
      width={50 * fixedSize}
      height={24 * fixedSize}
      viewBox='0 0 50 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...style}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d={
          isActive
            ? 'M11.84 0h25.653v23.68H10.853v-.04C4.776 23.138 0 18.047 0 11.84 0 5.633 4.776.542 10.853.04V0h.987z'
            : 'M37.493 23.68H11.84V0H38.48v.04c6.077.502 10.853 5.593 10.853 11.8 0 6.207-4.776 11.298-10.853 11.8v.04h-.987z'
        }
        fill={
          isActive
            ? activeColor ?? theme.green
            : inactiveColor ?? theme.mediumGray
        }
      />
      <Circle
        cx={isActive ? 37.493 : 11.84}
        cy={11.84}
        r={11.34}
        transform={isActive ? '' : 'rotate(-180 11.84 11.84)'}
        fill={theme.white}
        stroke={
          isActive
            ? activeColor ?? theme.green
            : inactiveColor ?? theme.mediumGray
        }
      />
    </Svg>
  );
}

export default ToggleSvg;
