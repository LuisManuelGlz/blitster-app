import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  default: {
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderColor: Colors.purple,
    borderRadius: 25,
  },
  buttonTitle: {
    color: Colors.purple,
    textAlign: 'center',
    fontSize: 16,
  },
});
