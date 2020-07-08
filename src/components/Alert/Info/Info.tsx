import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mainStyles from '../styles';
import styles from './Info.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  message: string;
}

const Info = (props: Props) => {
  const { style, message } = props;
  const customStyles = [mainStyles.default, styles.default, style];

  return (
    <View style={customStyles}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity>
        <Ionicons name="close-outline" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Info;
