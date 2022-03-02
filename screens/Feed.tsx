import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Text,
  SafeAreaView,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {fetchImages} from '../utils/api';
import CardList from '../components/CardList';
import colors from '../constants/colors';

type FeedType = {
  style: StyleProp<ViewStyle>;
  commentsForItem: {[key: string]: string[]};
  onPressComments: (id: number) => void;
};

const Feed = ({style = null, commentsForItem, onPressComments}: FeedType) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const items = await fetchImages();

        setLoading(false);
        setItems(items);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={[styles.container, style]}>
      <CardList
        items={items}
        commentsForItem={commentsForItem}
        onPressComments={onPressComments}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightDark,
  },
});

export default Feed;
