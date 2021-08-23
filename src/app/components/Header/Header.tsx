import React, { PropsWithChildren, useState } from 'react';

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  TouchableContainer,
  IconContainer,
} from './styles';
import { BackIcon, MenuIcon } from '../../../assets/svgs/icons';
import { theme } from '../../../configs/constants';
import { vw } from '../../helpers/units';

interface IProps {
  navigation: any;
  showBackButton?: boolean;
}

export function Header({
  children,
  navigation,
  showBackButton,
}: PropsWithChildren<IProps>) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container>
      <ButtonContainer>
        {showBackButton ? (
          <TouchableContainer
            onPressIn={() => setIsHighlighting(true)}
            onPressOut={() => setIsHighlighting(false)}
            onPress={() => navigation.goBack()}
          >
            <IconContainer>
              <BackIcon
                fillColor={isHighlighting ? theme.lightGray : theme.white}
                size={isHighlighting ? vw(1.1) : undefined}
              />
            </IconContainer>
          </TouchableContainer>
        ) : null}
      </ButtonContainer>
      <TitleContainer>
        <Text>{children}</Text>
      </TitleContainer>
      <ButtonContainer>
        <TouchableContainer>
          <IconContainer>
            <MenuIcon />
          </IconContainer>
        </TouchableContainer>
      </ButtonContainer>
    </Container>
  );
}
