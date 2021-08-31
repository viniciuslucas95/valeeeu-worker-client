import React from 'react';
import { FlatList } from 'react-native';
import {
  TagSection,
  PictureSection,
  InfoSection,
  DescriptionSection,
} from './components';
import { workerInfo } from '../../../shared/examples/data';

export function WorkPage() {
  const page = [
    <InfoSection {...workerInfo} />,
    <TagSection tags={workerInfo.tags} />,
    <PictureSection pictures={workerInfo.pictures} />,
    <DescriptionSection text={workerInfo.description} />,
  ];

  return (
    <FlatList
      data={page}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <>{item}</>}
    ></FlatList>
  );
}
