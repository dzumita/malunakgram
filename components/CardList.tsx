import React from 'react';
import {FlatList} from 'react-native';

import {getImageFromId} from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}: {id: number}) => id.toString();

const renderItem = ({item: {id, author}}: any) => (
  <Card
    fullname={author}
    image={{
      uri: getImageFromId(id),
    }}
  />
);

const CardList = ({items}: any) => (
  <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} />
);

export default CardList;
