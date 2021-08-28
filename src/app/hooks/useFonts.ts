import { useFonts as useFontsExpo } from 'expo-font';

export function useFonts() {
  const [isLoaded] = useFontsExpo({
    'Poppins-Light': require('../../assets/fonts/poppins-light.ttf'),
    'Poppins-LightItalic': require('../../assets/fonts/poppins-lightItalic.ttf'),
    'Poppins-Regular': require('../../assets/fonts/poppins-regular.ttf'),
    'Poppins-Italic': require('../../assets/fonts/poppins-italic.ttf'),
    'Poppins-Medium': require('../../assets/fonts/poppins-medium.ttf'),
    'Poppins-MediumItalic': require('../../assets/fonts/poppins-mediumItalic.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/poppins-semiBold.ttf'),
    'Roboto-Medium': require('../../assets/fonts/roboto-medium.ttf'),
  });

  return { isLoaded };
}
