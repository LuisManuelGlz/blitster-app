import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './ButtonSimple.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
}

const ButtonSimple = ({ style, title, onPress }: Props) => {
  const customStyle = [style];

  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSimple;
