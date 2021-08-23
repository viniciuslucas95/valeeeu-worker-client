import styled from 'styled-components/native';

import { theme } from '../../../configs/constants';
import { vhPx, vwPx } from '../../helpers/units';

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  background-color: ${theme.purple};
  height: ${vhPx(10)};
`;

export const TitleContainer = styled.View`
  height: 60%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: ${vwPx(5.5)};
  color: ${theme.white};
`;

export const ButtonContainer = styled.View`
  height: 60%;
  width: ${vwPx(15)};
`;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
