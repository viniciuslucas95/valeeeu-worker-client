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
import { FacebookIcon } from '../../../assets/svgs/icons';
import { IProps } from './interfaces';

export function FacebookLoginButton({
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
          plataform={Plataform.Facebook}
          highlight={isHighlighting}
        >
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
          <TextContainer>
            <Text>Entrar com o Facebook</Text>
          </TextContainer>
        </ButtonContainer>
      </TouchableContainer>
    </Container>
  );
}
