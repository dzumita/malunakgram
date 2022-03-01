import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../constants/colors';

type NavigationBarType = {
  title: string;
  leftText: string;
  onPressLeftText: () => void;
};

const NavigationBar = ({
  title = '',
  leftText = '',
  onPressLeftText = () => {},
}: NavigationBarType) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text style={styles.text}>{leftText}</Text>
      </TouchableOpacity>
      <Text style={[styles.text, styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.gray,
  },
  title: {
    fontWeight: '500',
  },
  leftText: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export default NavigationBar;
