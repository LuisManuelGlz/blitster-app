import React from 'react';
import { Primary, Secondary } from '.';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './Button.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
}

const Button = ({ style, title, onPress }: Props) => {
  const customStyle = [style];

  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.Primary = Primary;
Button.Secondary = Secondary;

export default Button;
