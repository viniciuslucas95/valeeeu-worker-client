import styled from 'styled-components/native';
import { colors } from '../../../../configs';
import { Unit } from '../../../helpers';
import { IColorable, IHaveSize } from '../interfaces';

const { vwPx } = Unit;

export const Container = styled.View<IHaveSize>`
  width: ${({ width }) => width};
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View<IColorable>`
  background-color: ${({ isSecondary }) =>
    isSecondary ? colors.white : colors.purple};
  height: 1px;
  flex: 1;
`;

export const Text = styled.Text<IColorable>`
  font-family: 'Poppins-Light';
  color: ${({ isSecondary }) => (isSecondary ? colors.white : colors.purple)};
  margin: 0 ${vwPx(3)};
  font-size: ${vwPx(3.75)};
`;
