import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { alert } from '../../../ducks';
import mainStyles from '../styles';
import styles from './Error.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  id: string;
  message: string;
}

const Error = (props: Props) => {
  const { style, id, message } = props;
  const dispatch = useDispatch();
  const customStyles = [mainStyles.default, styles.default, style];

  return (
    <View style={customStyles}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={() => dispatch(alert.actions.removeAlert(id))}>
        <Ionicons name="close-outline" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default Error;
