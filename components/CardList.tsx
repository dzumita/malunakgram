import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {getImageFromId} from '../utils/api';
import Card from './Card';

const keyExtractor = ({id}: {id: number}) => id.toString();

type CardListType = {
  items: any;
  commentsForItem: any;
  onPressComments: (id: number) => void;
};

const CardList = React.memo(
  ({items, commentsForItem, onPressComments}: CardListType) => {
    const renderItem: ListRenderItem<{
      id: number;
      author: string;
    }> = ({item: {id, author}}) => {
      const comments = commentsForItem[id];

      return (
        <Card
          fullname={author}
          image={{
            uri: getImageFromId(id),
          }}
          linkText={`${comments ? comments.length : 0} Comments`}
          onPressLinkText={() => onPressComments(id)}
        />
      );
    };

    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={commentsForItem}
        maxToRenderPerBatch={3}
      />
    );
  },
);

export default CardList;
