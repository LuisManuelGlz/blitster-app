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
    paddingLeft: 48,
  },
  inputIconLeft: {
    position: 'absolute',
    top: 8,
    left: 16,
    zIndex: 1000,
  },
  inputIconRight: {
    position: 'absolute',
    top: 8,
    right: 16,
    zIndex: 1000,
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: Colors.red,
  },
  errorMessage: {
    color: Colors.red,
    marginTop: 1,
  },
});
