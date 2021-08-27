import { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { IUser } from './interfaces';

export function useGoogleLoginApi(
  config: Partial<Google.GoogleAuthRequestConfig>
) {
  const [request, response, promptAsync] = Google.useAuthRequest(config);
  const [user, setUser] = useState<IUser>();
  const [isFetchingData, setIsFetchingData] = useState(false);

  async function fetchDataAsync() {
    setIsFetchingData(true);

    const res = await promptAsync();

    if (res.type !== 'success') setIsFetchingData(false);
  }

  useEffect(() => {
    if (response?.type !== 'success') return setIsFetchingData(false);

    const { authentication } = response;

    (async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${authentication?.accessToken}`
        );

        if (!res.ok) throw Error("Couldn't fetch the data from google url");

        const user = await res.json();

        setUser({
          id: user?.sub ?? '',
          firstName: user?.given_name ?? '',
          lastName: user?.family_name ?? '',
          email: user?.email ?? '',
        });
      } catch (err) {
        console.error(err.message);
      }

      setIsFetchingData(false);
    })();
  }, [response]);

  return { user, isFetchingData, fetchDataAsync };
}
