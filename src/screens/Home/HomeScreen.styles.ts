import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
  activityIndicatorContainer: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 50,
  },
});
