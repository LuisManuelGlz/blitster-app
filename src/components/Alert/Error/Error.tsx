import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { removeAlert } from '../../../redux/actions/alert';
import mainStyles from '../styles';
import styles from './Error.styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  id: number | string;
  message: string;
  removeAlert: (id: string | number) => void;
}

const Error = (props: Props) => {
  const { style, id, message, removeAlert } = props;
  const customStyles = [mainStyles.default, styles.default, style];

  return (
    <View style={customStyles}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={() => removeAlert(id)}>
        <Ionicons name="close-outline" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = { removeAlert };

export default connect(null, mapDispatchToProps)(Error);
