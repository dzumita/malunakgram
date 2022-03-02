import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import colors from '../constants/colors';

type CommentListType = {
  items: string[];
};

const CommentList = ({items}: CommentListType) => {
  console.log('items:', items);

  const renderItem = (item: string, index: number) => (
    <View key={index} style={styles.comment}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );

  return <ScrollView>{items.map(renderItem)}</ScrollView>;
};

const styles = StyleSheet.create({
  comment: {
    backgroundColor: colors.dark,
    paddingLeft: 20,
    paddingVertical: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  text: {
    color: colors.gray,
  },
});

export default CommentList;
