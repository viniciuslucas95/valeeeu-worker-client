import React, { useState } from 'react';

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
  title?: any;
  secondary?: boolean;
  navigation: any;
  showBackButton?: boolean;
}

export function Header({
  secondary,
  title,
  navigation,
  showBackButton,
}: IProps) {
  const [isHighlighting, setIsHighlighting] = useState(false);

  return (
    <Container secondary={secondary}>
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
        {typeof title === 'object' ? (
          title
        ) : (
          <Text secondary={secondary}>{title}</Text>
        )}
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
