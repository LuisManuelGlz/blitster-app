import { StyleSheet } from 'react-native';
import { PADDING_HORIZONTAL } from '../../constants/Layout';
import { Colors } from '../../styles';

export default StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    maxHeight: 48,
    backgroundColor: Colors.gray,
    borderRadius: 25,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 16,
  },
  iconContainer: {
    marginTop: 8,
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
    // marginTop: 1,
  },
});
