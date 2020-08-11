import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.textLight,
  },
  logo: {
    width: 120,
    height: 120,
  },
  button: {
    marginTop: 16,
  },
});
