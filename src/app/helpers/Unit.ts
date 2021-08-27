import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export class Unit {
  static vw(number: number) {
    return (number * screenWidth) / 100;
  }

  static vwPx(number: number) {
    return (number * screenWidth) / 100 + 'px';
  }

  static vh(number: number) {
    return (number * screenHeight) / 100;
  }

  static vhPx(number: number) {
    return (number * screenHeight) / 100 + 'px';
  }
}
