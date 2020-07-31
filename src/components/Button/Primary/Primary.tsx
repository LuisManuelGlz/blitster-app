import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import mainStyles from '../styles';
import styles from './Primary.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  block?: boolean;
  title?: string;
  icon?: any;
  onPress: () => void;
}

const Primary = ({ style, block, title, icon, onPress }: Props) => {
  const customStyle = [mainStyles.default, styles.default, style];

  if (block) {
    customStyle.push(mainStyles.block);
  }

  return (
    <TouchableOpacity style={customStyle} onPress={onPress}>
      <Text style={styles.buttonTitle}>
        {icon}
        {icon && title && ' '}
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Primary;
