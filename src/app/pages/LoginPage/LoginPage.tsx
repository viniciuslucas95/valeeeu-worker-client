import React, { useState } from 'react';
import { Container, OptionsContainer } from './styles';
import { Unit } from '../../helpers';
import { Separator, Button, Input } from '../components';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  CheckBox,
  Link,
} from './components';
import { useFacebookLoginApi, useGoogleLoginApi } from '../../hooks/loginApis';
import { StackScreens } from '../enums';
import { useContext } from 'react';
import { loginContext } from '../../contexts';
import { LogoSvg } from '../../../assets/svgs';
import { Sizes } from '../components/enums';
import { apis } from '../../../configs';

const { vh, vw } = Unit;
const { facebookId, googleAndroidId, googleExpoId, googleIosId, googleWebId } =
  apis;

export function LoginPage({ navigation }: any) {
  const {
    user: facebookUser,
    isFetchingData: isFacebookFetchingData,
    fetchDataAsync: fetchFacebookDataAsync,
  } = useFacebookLoginApi({
    clientId: facebookId,
  });
  const {
    user: googleUser,
    isFetchingData: isGoogleFetchingData,
    fetchDataAsync: fetchGoogleDataAsync,
  } = useGoogleLoginApi({
    androidClientId: googleAndroidId,
    expoClientId: googleExpoId,
    iosClientId: googleIosId,
    webClientId: googleWebId,
  });
  const { setAccount } = useContext(loginContext);
  const [isRememberingPassword, setIsRememberingPassword] = useState(false);
  const isFetchingData = isFacebookFetchingData || isGoogleFetchingData;

  return (
    <Container>
      <LogoSvg size={vw(1.1)} />
      <FacebookLoginButton
        style={{ marginTop: vh(4) }}
        isFetchingData={isFetchingData}
        fetchDataAsync={fetchFacebookDataAsync}
      />
      <GoogleLoginButton
        style={{ marginTop: vh(1) }}
        isFetchingData={isFetchingData}
        fetchDataAsync={fetchGoogleDataAsync}
      />
      <Separator style={{ marginTop: vh(1.5) }}>ou</Separator>
      <Input
        style={{ marginTop: vh(1.5) }}
        placeholder='Email'
        size={Sizes.big}
      />
      <Input
        style={{ marginTop: vh(1) }}
        placeholder='Senha'
        isSecure={true}
        size={Sizes.big}
      />
      <OptionsContainer style={{ marginTop: vh(1.5) }}>
        <CheckBox
          isChecked={isRememberingPassword}
          onPress={setIsRememberingPassword}
        >
          Lembrar senha
        </CheckBox>
        <Link>Recuperar senha</Link>
      </OptionsContainer>
      <Button
        style={{ marginTop: vh(1.5) }}
        onPress={() =>
          setAccount({ id: 123, name: 'test', email: 'test@gmail.com' })
        }
        size={Sizes.big}
      >
        Entrar
      </Button>
      <Separator style={{ marginTop: vh(1.5) }}>Não tem conta?</Separator>
      <Button
        size={Sizes.big}
        style={{ marginTop: vh(1.5), marginBottom: vh(4) }}
        isSecondary
        onPress={() => navigation.navigate(StackScreens.CreateAccount)}
      >
        Criar Conta
      </Button>
    </Container>
  );
}
