import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  userInfo: {
    marginLeft: 16,
  },
  fullName: {
    color: Colors.textLight,
    fontWeight: 'bold',
  },
  username: {
    color: Colors.textLight,
  },
});
