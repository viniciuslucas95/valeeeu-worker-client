import React from 'react';
import { setStatusBarStyle } from 'expo-status-bar';

import { Container } from '../CreateAccountPage/styles';
import { vh } from '../../helpers/units';
import { Input, Button, Separator } from '../../components';

export function CreateAccountPage() {
  setStatusBarStyle('light');

  return (
    <Container>
      <Separator style={{ marginTop: vh(2) }}>Criar conta</Separator>
      <Input style={{ marginTop: vh(1.5) }} placeholder='Nome' />
      <Input style={{ marginTop: vh(1) }} placeholder='Sobrenome' />
      <Input style={{ marginTop: vh(1) }} placeholder='Email' />
      <Input style={{ marginTop: vh(1) }} placeholder='Senha' isSecure={true} />
      <Button style={{ marginTop: vh(1.5) }}>Criar conta</Button>
    </Container>
  );
}
