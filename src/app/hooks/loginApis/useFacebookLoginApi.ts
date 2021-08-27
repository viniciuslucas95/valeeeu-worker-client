import { useState, useEffect } from 'react';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { IUser } from './interfaces';

export function useFacebookLoginApi(
  config: Partial<Facebook.FacebookAuthRequestConfig>
) {
  const [request, response, promptAsync] = Facebook.useAuthRequest(config);
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
          `https://graph.facebook.com/me?access_token=${authentication?.accessToken}`
        );

        if (!res.ok)
          throw Error(
            "Couldn't fetch the data from facebook url. Authentication phase"
          );

        const data = await res.json();

        const { id } = data;

        const userRes = await fetch(
          `https://graph.facebook.com/${id}?fields=first_name,last_name,email&access_token=${authentication?.accessToken}`
        );

        if (!userRes.ok)
          throw Error("Couldn't fetch the data from facebook url. ID phase");

        const user = await userRes.json();

        setUser({
          id: user?.id ?? '',
          firstName: user?.first_name ?? '',
          lastName: user?.last_name ?? '',
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
