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
import { FacebookIcon } from '../../../../../assets/svgs/icons';
import { IFetchData } from './interfaces';
import { IStyleable } from '../../../components/interfaces';

interface IProps extends IStyleable, IFetchData {}

export function FacebookLoginButton({
  isFetchingData,
  fetchDataAsync,
  style,
}: IProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <Container {...style}>
      <TouchableContainer
        onPressIn={() => setIsHighlighted(true)}
        onPressOut={() => setIsHighlighted(false)}
        onPress={() => {
          if (isFetchingData) return;

          fetchDataAsync();
        }}
      >
        <ButtonContainer
          plataform={Plataform.Facebook}
          isHighlighted={isHighlighted}
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
