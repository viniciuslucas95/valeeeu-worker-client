import styled from 'styled-components/native';
import { theme } from '../../../../../../configs/constants';
import { vwPx } from '../../../../../helpers/units';

interface IProps {
  secondary?: boolean;
  bold?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text<IProps>`
  color: ${({ secondary }) => (secondary ? theme.purple : theme.white)};
  font-family: ${({ bold }) =>
    bold ? 'Poppins-MediumItalic' : 'Poppins-LightItalic'};
  font-size: ${vwPx(3.5)};
  height: ${vwPx(5)};
`;
