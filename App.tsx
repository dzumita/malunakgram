import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

const App = () => {
  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(-1);

  console.log('com', commentsForItem);

  useEffect(() => {
    (async () => {
      try {
        const commentsForItem = await AsyncStorage.getItem(
          ASYNC_STORAGE_COMMENTS_KEY,
        );
        setCommentsForItem(commentsForItem ? JSON.parse(commentsForItem) : {});
      } catch (e) {
        console.log('Failed to load comments');
      }
    })();
  }, []);

  const openCommentScreen = (id: number) => {
    setShowModal(true);
    setSelectedItemId(id);
  };

  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(-1);
  };

  const onSubmitComment = async (text: string) => {
    const comments = commentsForItem[selectedItemId] || [];
    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };

    setCommentsForItem(updated);

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated),
      );
    } catch (e) {
      console.log('Failed to save comment', text, 'for', selectedItemId);
    }
  };

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}>
        <Comments
          style={styles.comments}
          comments={commentsForItem[selectedItemId] || []}
          onClose={closeCommentScreen}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
  },
  comments: {
    flex: 1,
  },
});
export default App;
