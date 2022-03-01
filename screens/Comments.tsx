import {SafeAreaView, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';
import colors from '../constants/colors';

type CommentsType = {
  style: StyleProp<ViewStyle>;
  comments: string[];
  onClose: () => void;
  onSubmitComment: (text: string) => Promise<void>;
};

const Comments = ({
  style = null,
  comments,
  onClose,
  onSubmitComment,
}: CommentsType) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightDark,
  },
});

export default Comments;
