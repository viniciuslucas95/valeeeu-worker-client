import React, { useState } from 'react';

import { Container, OptionsContainer } from './styles';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from '../../components/LoginButtons';
import { vh } from '../../helpers/units';
import { Separator, Input, CheckBox, Link, Button } from '../../components';
import { useFacebookLoginApi, useGoogleLoginApi } from '../../hooks/loginApis';
import { apiConfig } from '../../../configs/constants';
import { StackScreens } from '../enums';
import { useContext } from 'react';
import { loginContext } from '../../contexts';

export function LoginPage({ navigation }: any) {
  const {
    user: facebookUser,
    isFetchingData: isFacebookFetchingData,
    fetchDataAsync: fetchFacebookDataAsync,
  } = useFacebookLoginApi({
    clientId: apiConfig.facebookId,
  });
  const {
    user: googleUser,
    isFetchingData: isGoogleFetchingData,
    fetchDataAsync: fetchGoogleDataAsync,
  } = useGoogleLoginApi({
    androidClientId: apiConfig.googleAndroidId,
    expoClientId: apiConfig.googleExpoId,
    iosClientId: apiConfig.googleIosId,
    webClientId: apiConfig.googleWebId,
  });
  const { setAccount } = useContext(loginContext);
  const [isRememberingPassword, setIsRememberingPassword] = useState(false);
  const isFetchingData = isFacebookFetchingData || isGoogleFetchingData;

  return (
    <Container>
      <FacebookLoginButton
        isFetchingData={isFetchingData}
        fetchDataAsync={fetchFacebookDataAsync}
      />
      <GoogleLoginButton
        style={{ marginTop: vh(1) }}
        isFetchingData={isFetchingData}
        fetchDataAsync={fetchGoogleDataAsync}
      />
      <Separator style={{ marginTop: vh(1.5) }}>ou</Separator>
      <Input style={{ marginTop: vh(1.5) }} placeholder='Email' />
      <Input style={{ marginTop: vh(1) }} placeholder='Senha' isSecure={true} />
      <OptionsContainer style={{ marginTop: vh(1.5) }}>
        <CheckBox
          filled={isRememberingPassword}
          setIsRememberingPassword={setIsRememberingPassword}
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
      >
        Entrar
      </Button>
      <Separator style={{ marginTop: vh(1.5) }}>Não tem conta?</Separator>
      <Button
        style={{ marginTop: vh(1.5) }}
        secondary
        onPress={() => navigation.navigate(StackScreens.CreateAccount)}
      >
        Criar Conta
      </Button>
    </Container>
  );
}
