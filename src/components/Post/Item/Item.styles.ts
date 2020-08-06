import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.grayLighten,
    padding: 16,
  },
  postHeader: {
    flex: 1,
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
