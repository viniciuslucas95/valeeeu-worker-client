import styled from 'styled-components/native';
import { colors } from '../../../../../../configs/constants';
import { Unit } from '../../../../../helpers';
import { IColorable } from '../../../../components/interfaces';
import { IHaveBoldText } from '../interface';

const { vwPx } = Unit;

interface IProps extends IColorable, IHaveBoldText {}

export const Container = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text<IProps>`
  color: ${({ isSecondary }) => (isSecondary ? colors.purple : colors.white)};
  font-family: ${({ isTextBold }) =>
    isTextBold ? 'Poppins-MediumItalic' : 'Poppins-LightItalic'};
  font-size: ${vwPx(3.5)};
  height: ${vwPx(5)};
`;
