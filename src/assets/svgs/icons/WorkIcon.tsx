import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { vw } from '../../../app/helpers/units';
import { theme } from '../../../configs/constants';

interface IProps {
  active?: boolean;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export function WorkIcon({ active, size, style }: IProps) {
  const fixedSize = (size ?? vw(1)) / 3;

  return (
    <Svg
      width={25 * fixedSize}
      height={21 * fixedSize}
      viewBox='0 0 25 21'
      fill='none'
      style={style}
    >
      {active ? (
        <Path
          d='M23.042 7.35v-.125H1.958v11.8h21.084V7.35zM.125 20.875v-15.5h24.75v15.5H.125zM7.417 2.1c0-1.091.878-1.975 1.958-1.975h6.25c1.08 0 1.958.884 1.958 1.975v1.975H15.75v-1.45a.648.648 0 00-.646-.65H9.896a.648.648 0 00-.646.65v1.45H7.417V2.1z'
          fill={theme.white}
          stroke={theme.purple}
          strokeWidth={0.2}
        />
      ) : (
        <>
          <Path
            d='M22.917 7.35V18.9H2.083V7.35h20.834zM25 5.25H0V21h25V5.25zM9.375 0c-1.15 0-2.083.94-2.083 2.1v2.1h2.083V2.625c0-.29.233-.525.52-.525h5.21c.287 0 .52.235.52.525V4.2h2.083V2.1c0-1.16-.933-2.1-2.083-2.1h-6.25z'
            fill={theme.white}
          />
          <Path
            d='M22.917 7.35V18.9H2.083V7.35h20.834zM25 5.25H0V21h25V5.25zM9.375 0c-1.15 0-2.083.94-2.083 2.1v2.1h2.083V2.625c0-.29.233-.525.52-.525h5.21c.287 0 .52.235.52.525V4.2h2.083V2.1c0-1.16-.933-2.1-2.083-2.1h-6.25z'
            stroke={theme.purple}
          />
        </>
      )}
    </Svg>
  );
}
