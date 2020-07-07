import { StyleSheet } from 'react-native';
import { Layout } from '../../styles';

export default StyleSheet.create({
  container: {
    ...Layout.containerWithMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  button: {
    marginTop: 16,
  },
});
