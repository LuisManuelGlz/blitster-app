import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import mainStyles from '../styles';
import styles from './H2.styles';

interface Props {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  dark?: boolean;
  light?: boolean;
  danger?: boolean;
  center?: boolean;
}

const H2 = (props: Props) => {
  const customStyles = [styles.default, props.style];
  const { primary, secondary, dark, light, danger, center } = props;

  if (primary) {
    customStyles.push(mainStyles.primary);
  }

  if (secondary) {
    customStyles.push(mainStyles.secondary);
  }

  if (dark) {
    customStyles.push(mainStyles.dark);
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

export default H2;
