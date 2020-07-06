import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import mainStyles from '../styles';
import styles from './Secondary.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  block?: boolean;
  title: string;
  onPress: () => void;
}

const Secondary = ({ style, block, title, onPress }: Props) => {
  const customStyle = [mainStyles.default, styles.default, style];

  if (block) {
    customStyle.push(mainStyles.block);
  }

  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Secondary;
