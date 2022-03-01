import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import colors from '../constants/colors';

type CommentInput = {
  onSubmit: (text: string) => void;
  placeholder: string;
};

const CommentInput = ({placeholder = '', onSubmit}: CommentInput) => {
  const [text, setText] = useState('');

  const handleSubmitEditing = () => {
    if (!text) return;

    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        underlineColorAndroid="transparent"
        onChangeText={setText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
  },
  input: {
    flex: 1,
    color: colors.gray,
  },
});

export default CommentInput;
