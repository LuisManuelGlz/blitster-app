import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL } from '../../constants/Layout';
import { Colors } from '../../styles';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.grayLighten,
    borderRadius: 10,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  input: {
    fontSize: 16,
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: Colors.red,
  },
  errorsContainer: {
    paddingHorizontal: 8,
  },
  errorMessage: {
    color: Colors.red,
  },
});
