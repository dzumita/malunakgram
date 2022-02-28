import {ActivityIndicator, Text, SafeAreaView} from 'react-native';

import React, {useState, useEffect} from 'react';
import {fetchImages} from '../utils/api';
import CardList from '../components/CardList';

const Feed = ({style = null}) => {
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
  });

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList items={items} />
    </SafeAreaView>
  );
};

export default Feed;
