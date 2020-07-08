import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL } from '../../constants/Layout';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 8,
  },
  input: {
    height: 48,
    fontSize: 16,
    paddingHorizontal: PADDING_HORIZONTAL,
    borderRadius: 25,
    backgroundColor: Colors.gray,
  },
  inputWithIcon: {
    height: 48,
    fontSize: 16,
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
