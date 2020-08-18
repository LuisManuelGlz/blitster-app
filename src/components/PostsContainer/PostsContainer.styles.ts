import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  post: {
    marginTop: 8,
    borderRadius: 20,
  },
  noPostsMessage: {
    color: Colors.textLight,
    textAlign: 'center',
  },
  endScroll: {
    marginVertical: 8,
    textAlign: 'center',
  },
});
