import { StyleSheet } from 'react-native';
import { screen } from '../../constants/Layout';

export default StyleSheet.create({
  default: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  block: {
    width: screen.width - 64,
  },
});
