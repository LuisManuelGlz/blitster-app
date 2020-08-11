import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.grayDarken,
    padding: 16,
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creationDate: {
    color: Colors.grayLighten,
  },
  body: {
    paddingVertical: 8,
  },
  content: {
    color: Colors.textLight,
  },
});
