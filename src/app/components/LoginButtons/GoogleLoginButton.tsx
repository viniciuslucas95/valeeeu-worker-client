import React, { useState } from 'react';

import {
  Container,
  TouchableContainer,
  TextContainer,
  Plataform,
  Text,
  IconContainer,
  ButtonContainer,
} from './styles';
import { GoogleIcon } from '../../../assets/svgs/icons';
import { IProps } from './interfaces';

export function GoogleLoginButton({
  isFetchingData,
  fetchDataAsync,
  style,
}: IProps) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighting(true)}
        onPressOut={() => setIsHighlighting(false)}
        onPress={() => {
          if (isFetchingData) return;

          fetchDataAsync();
        }}
      >
        <ButtonContainer
          plataform={Plataform.Google}
          highlight={isHighlighting}
        >
          <IconContainer>
            <GoogleIcon />
          </IconContainer>
          <TextContainer>
            <Text>Entrar com o Google</Text>
          </TextContainer>
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
