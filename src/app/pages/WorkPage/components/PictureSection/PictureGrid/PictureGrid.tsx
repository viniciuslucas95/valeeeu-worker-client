import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Touchable } from '../../../../../components';
import { vh } from '../../../../../helpers/units';
import { Picture } from './styles';

interface IProps {
  width: string;
  columns: number;
  pictures: ImageSourcePropType[];
  style?: StyleProp<ViewStyle>;
}

export function PictureGrid({ style, pictures, columns, width }: IProps) {
  if (pictures.length === 0) return null;
  if (columns <= 0) columns = 1;

  return (
    <FlatList
      data={pictures.slice(0, 6)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Touchable onPress={() => console.log(index + ' picture pressed')}>
          <Picture source={item} />
        </Touchable>
      )}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        flexDirection: 'row',
      }}
      style={{ marginTop: vh(1.5) }}
    />
  );
}
