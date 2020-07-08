import { StyleSheet } from 'react-native';
import { screen } from '../../../constants/Layout';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  default: {
    backgroundColor: Colors.red,
    opacity: 0.9,
    width: screen.width,
    maxHeight: 64,
  },
  text: {
    color: Colors.white,
  },
});
