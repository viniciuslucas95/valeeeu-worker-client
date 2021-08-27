import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { vh, vw, vwPx } from '../../../../../helpers/units';
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
      data={pictures}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Picture source={item} />}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        flexDirection: 'row',
      }}
      style={{ marginTop: vh(1.5) }}
    />
  );
}
