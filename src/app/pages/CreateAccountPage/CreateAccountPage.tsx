import React from 'react';
import { Container } from '../CreateAccountPage/styles';
import { Input, Button, Separator } from '../components';
import { Unit } from '../../helpers';
import { Sizes } from '../components/enums';
import { LogoSvg } from '../../../assets/svgs';

const { vh, vwPx, vw } = Unit;

export function CreateAccountPage() {
  return (
    <Container>
      <LogoSvg size={vw(1.1)} />
      <Separator style={{ marginTop: vh(4) }} width={vwPx(90)}>
        Criar Conta
      </Separator>
      <Input
        style={{ marginTop: vh(1.5) }}
        width={vwPx(90)}
        placeholder='Nome'
        size={Sizes.big}
      />
      <Input
        style={{ marginTop: vh(1) }}
        width={vwPx(90)}
        placeholder='Sobrenome'
        size={Sizes.big}
      />
      <Input
        style={{ marginTop: vh(1) }}
        width={vwPx(90)}
        placeholder='Email'
        size={Sizes.big}
      />
      <Input
        style={{ marginTop: vh(1) }}
        width={vwPx(90)}
        placeholder='Senha'
        isSecure={true}
        size={Sizes.big}
      />
      <Button
        style={{ marginTop: vh(1.5), marginBottom: vh(8) }}
        width={vwPx(90)}
        onPress={() => console.log('create account pressed')}
        size={Sizes.big}
      >
        Criar Conta
      </Button>
    </Container>
  );
}
