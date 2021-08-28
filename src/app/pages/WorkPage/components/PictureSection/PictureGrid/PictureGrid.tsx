import React from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import { Touchable } from '../../../../components';
import { Picture } from './styles';
import { IStyleable } from '../../../../components/interfaces';

interface IProps extends IStyleable {
  columns: number;
  pictures: ImageSourcePropType[];
}

export function PictureGrid({ style, pictures, columns }: IProps) {
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
      style={style}
    />
  );
}
