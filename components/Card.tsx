import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AuthorRow from './AuthorRow';
import colors from '../constants/colors';

type CardType = {
  fullname: string;
  image: ImageSourcePropType;
  linkText?: string;
  onPressLinkText?: () => void;
};

const Card = ({
  fullname,
  image,
  linkText = '',
  onPressLinkText = () => {},
}: CardType) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => setLoading(false);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
      <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    marginBottom: 25
  },
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});

export default Card;
