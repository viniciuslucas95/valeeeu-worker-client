import styled from 'styled-components/native';
import { sizes, colors } from '../../../../../configs/constants';
import { Unit } from '../../../../helpers';

const { vwPx } = Unit;

export enum Plataform {
  Facebook,
  Google,
}

interface IProps {
  plataform: Plataform;
  isHighlighted?: boolean;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View<IProps>`
  background-color: ${({ plataform, isHighlighted }) =>
    plataform === Plataform.Facebook
      ? isHighlighted
        ? colors.facebookHighlight
        : colors.facebook
      : isHighlighted
      ? colors.googleHighlight
      : colors.google};
  flex-direction: row;
  width: ${vwPx(90)};
  height: ${sizes.buttonBigHeight};
  border-radius: ${vwPx(10)};
  padding: 0 ${vwPx(1.5)};
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  flex: 1;
  align-self: center;
`;

export const Text = styled.Text`
  margin: auto;
  color: ${colors.white};
  font-family: 'Roboto-Medium';
  font-size: ${vwPx(4)};
`;
