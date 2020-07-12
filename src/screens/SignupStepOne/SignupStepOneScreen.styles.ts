import { StyleSheet } from 'react-native';
import { Layout } from '../../styles';

export default StyleSheet.create({
  container: {
    ...Layout.containerWithMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 32,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});
