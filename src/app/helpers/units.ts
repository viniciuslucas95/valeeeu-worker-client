import { Dimensions, PixelRatio } from 'react-native';

export function rem(number: number) {
  return number * PixelRatio.get();
}

export function remPx(number: number) {
  return number * PixelRatio.get() + 'px';
}

export function vw(number: number) {
  return (number * Dimensions.get('screen').width) / 100;
}

export function vwPx(number: number) {
  return (number * Dimensions.get('screen').width) / 100 + 'px';
}

export function vh(number: number) {
  return (number * Dimensions.get('screen').height) / 100;
}

export function vhPx(number: number) {
  return (number * Dimensions.get('screen').height) / 100 + 'px';
}
