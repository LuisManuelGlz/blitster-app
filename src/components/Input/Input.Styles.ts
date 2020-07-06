import { StyleSheet } from 'react-native';
import { screen, PADDING_HORIZONTAL } from '../../constants/Layout';

export default StyleSheet.create({
  container: {
    marginTop: 8,
  },
  input: {
    width: screen.width - 64,
    height: 48,
    fontSize: 16,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
  },
  inputWithIcon: {
    width: screen.width - 64,
    height: 48,
    paddingLeft: 48,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 16,
    zIndex: 1000,
  },
});
