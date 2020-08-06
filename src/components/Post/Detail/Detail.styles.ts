import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creationDate: {
    color: Colors.grayDarken,
  },
  body: {
    paddingVertical: 8,
  },
});
