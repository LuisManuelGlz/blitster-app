import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import mainStyles from '../styles';
import styles from './H3.styles';

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  light?: boolean;
  danger?: boolean;
  center?: boolean;
}

const H3 = (props: Props) => {
  const customStyles = [mainStyles.default, styles.default, props.style];
  const { primary, secondary, light, danger, center } = props;

  if (primary) {
    customStyles.push(mainStyles.primary);
  }

  if (secondary) {
    customStyles.push(mainStyles.secondary);
  }

  if (light) {
    customStyles.push(mainStyles.light);
  }

  if (danger) {
    customStyles.push(mainStyles.danger);
  }

  if (center) {
    customStyles.push(mainStyles.center);
  }

  return <Text {...props} style={customStyles} />;
};

export default H3;
