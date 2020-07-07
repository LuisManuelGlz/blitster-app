import { StyleSheet } from 'react-native';
import { Layout } from '../../styles';

export default StyleSheet.create({
  container: {
    ...Layout.containerWithMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 16,
  },
});
