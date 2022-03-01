import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';
import colors from '../constants/colors';

type AuthorRowType = {
  fullname: string;
  linkText: string;
  onPressLinkText: () => void;
};

const AuthorRow = ({fullname, linkText, onPressLinkText}: AuthorRowType) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullname)}
        backgroundColor={getAvatarColor(fullname)}
      />

      <Text style={[styles.text, styles.fullname]} numberOfLines={1}>
        {fullname}
      </Text>

      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text style={styles.text} numberOfLines={1}>
            {linkText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: colors.gray,
  },
  fullname: {
    flex: 1,
    marginHorizontal: 6,
  },
});

export default AuthorRow;
