import React, {useState} from 'react';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';

import Feed from './screens/Feed';

const App = () => {
  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<null | number>(null);

  const openCommentScreen = (id: number) => {
    setShowModal(true);
    setSelectedItemId(id);
  };

  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(null);
  };

  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
    </View>
  );
};

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? StatusBar.currentHeight
        : 0,
  },
});
export default App;
