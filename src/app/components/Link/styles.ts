import styled from 'styled-components/native';

import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

interface IProps {
  highlight?: boolean;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Text = styled.Text<IProps>`
  font-family: ${({ highlight }) =>
    highlight ? 'Poppins-Medium' : 'Poppins-Light'};
  color: ${({ highlight }) =>
    highlight ? theme.purpleHighlight : theme.purple};
  font-size: ${vwPx(3.5)};
  position: relative;
  top: ${vhPx(0.15)};
`;
