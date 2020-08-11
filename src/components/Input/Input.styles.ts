import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL } from '../../constants/Layout';
import { Colors } from '../../styles';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    maxHeight: 48,
    backgroundColor: Colors.grayLighten,
    borderRadius: 25,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 16,
  },
  iconContainer: {
    marginTop: 12,
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: Colors.danger,
  },
  errorsContainer: {
    paddingHorizontal: 8,
  },
  errorMessage: {
    color: Colors.danger,
  },
});
