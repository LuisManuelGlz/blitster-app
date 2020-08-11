import { StyleSheet } from 'react-native';
import { Colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  likes: {
    color: Colors.textLight,
  },
  comments: {
    color: Colors.textLight,
  },
});
