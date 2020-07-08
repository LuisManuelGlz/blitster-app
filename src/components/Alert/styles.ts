import { StyleSheet } from 'react-native';
import { screen } from '../../constants/Layout';

export default StyleSheet.create({
  default: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.9,
    marginTop: 1,
    width: screen.width,
    maxHeight: 64,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
