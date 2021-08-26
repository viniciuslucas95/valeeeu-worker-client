import styled from 'styled-components/native';

import { theme, sizes } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';
import { Sizes } from '../enums';

interface IProps {
  size?: Sizes;
}

export const Container = styled.TextInput<IProps>`
  width: ${({ size }) =>
    size === Sizes.Medium ? sizes.elementMediumWidth : vwPx(80)};
  height: ${sizes.elementHeight};
  border: ${sizes.border} solid ${theme.purple};
  border-radius: ${vwPx(10)};
  background-color: ${theme.white};
  padding: ${vhPx(1)} ${vwPx(4)} ${vhPx(0.5)} ${vwPx(4)};
  font-family: 'Poppins-Light';
  color: ${theme.purple};
`;
