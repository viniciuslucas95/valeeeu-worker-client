import styled from 'styled-components/native';
import { colors, sizes } from '../../../../configs';
import { Unit } from '../../../helpers';
import { Sizes } from '../enums';
import { IHaveSize } from '../interfaces';

const { vhPx, vwPx } = Unit;

export const Container = styled.TextInput<IHaveSize>`
  width: ${({ width }) => width};
  height: ${({ size }) =>
    size === Sizes.small
      ? sizes.buttonSmallHeight
      : size === Sizes.big
      ? sizes.buttonBigHeight
      : sizes.buttonMediumHeight};
  border: ${sizes.border} solid ${colors.purple};
  border-radius: ${vwPx(10)};
  background-color: ${colors.white};
  padding: ${vhPx(1)} ${vwPx(4)} ${vhPx(0.5)} ${vwPx(4)};
  font-family: 'Poppins-Light';
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : sizes.textMedium};
  color: ${colors.purple};
`;
