import styled from 'styled-components/native';
import { colors, sizes } from '../../../../configs';
import { Sizes } from '../enums';
import { Unit } from '../../../helpers';
import { IHaveSize, IColorable } from '../interfaces';

const { vwPx, vhPx } = Unit;

interface IProps extends IHaveSize, IColorable {
  highlight: boolean;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View<IProps>`
  background-color: ${({ isSecondary, highlight }) =>
    isSecondary
      ? highlight
        ? colors.whiteHighlight
        : colors.white
      : highlight
      ? colors.purpleHighlight
      : colors.purple};
  width: ${({ width }) => width};
  height: ${({ size }) =>
    size === Sizes.small
      ? sizes.buttonSmallHeight
      : size === Sizes.big
      ? sizes.buttonBigHeight
      : sizes.buttonMediumHeight};
  border-radius: ${vwPx(10)};
  border-color: ${({ isSecondary, highlight }) =>
    isSecondary
      ? highlight
        ? colors.purpleHighlight
        : colors.purple
      : colors.white};
  border-width: ${({ isSecondary }) => (isSecondary ? sizes.border : 0)};
  padding: 0 ${vwPx(2)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<Partial<IProps>>`
  top: ${vhPx(0.2)};
  font-family: 'Poppins-SemiBold';
  font-size: ${({ size }) =>
    size === Sizes.small
      ? sizes.textSmall
      : size === Sizes.big
      ? sizes.textBig
      : sizes.textMedium};
  color: ${({ isSecondary, highlight }) =>
    isSecondary
      ? highlight
        ? colors.purpleHighlight
        : colors.purple
      : highlight
      ? colors.whiteHighlight
      : colors.white};
`;
