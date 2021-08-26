import React, { useContext } from 'react';
import { Container, Text } from './styles';
import { Toggle } from '../Toggle';
import { theme } from '../../../configs/constants';
import { workContext } from '../../contexts';

export function WorkToggle() {
  const { isWorking, setIsWorking } = useContext(workContext);

  return (
    <Container>
      <Text isWorking={isWorking}>Disponível</Text>
      <Toggle setToggleValue={setIsWorking} inactiveColor={theme.mediumGray} />
    </Container>
  );
}
