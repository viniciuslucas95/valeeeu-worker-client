import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { Unit } from '../../app/helpers';
import { colors } from '../../configs';
import { IProps } from './interfaces';

const { vw } = Unit;

interface ICheckBox extends IProps {
  isChecked?: boolean;
  strokeColor?: string;
  checkedColor?: string;
  checkedStrokeColor?: string;
}

export function CheckBoxSvg({
  size,
  style,
  color,
  isChecked,
  strokeColor,
  checkedColor,
  checkedStrokeColor,
}: ICheckBox) {
  const fixedSize = ((size ?? vw(1)) / 3.6) * 15;

  return (
    <Svg
      width={fixedSize}
      height={fixedSize}
      viewBox='0 0 15 15'
      fill='none'
      style={style}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={14}
        height={14}
        rx={7}
        fill={
          isChecked ? checkedColor ?? colors.darkGray : color ?? colors.white
        }
        stroke={
          isChecked
            ? checkedStrokeColor ?? colors.darkGray
            : strokeColor ?? colors.mediumGray
        }
        strokeWidth={1}
      />
    </Svg>
  );
}
