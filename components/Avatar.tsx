import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type AvatarType = {
  initials: string;
  size: number;
  backgroundColor: string;
};

const Avatar = ({initials, size, backgroundColor}: AvatarType) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Avatar;
