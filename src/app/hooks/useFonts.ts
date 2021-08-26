import { useFonts as useFontsExpo } from 'expo-font';

export function useFonts() {
  const [isLoaded] = useFontsExpo({
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('../../assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
  });

  return { isLoaded };
}
