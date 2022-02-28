import {SafeAreaView} from 'react-native';
import React from 'react';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

type CommentsType = {
  style: any;
  comments: any;
  onClose: () => void;
  onSubmitComment: () => void;
};

const Comments = ({
  style = null,
  comments,
  onClose,
  onSubmitComment,
}: CommentsType) => {
  return (
    <SafeAreaView style={style}>
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

export default Comments;
