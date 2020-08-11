import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  profileContainer: {
    paddingHorizontal: 16,
  },
  userInfoContainer: {
    paddingVertical: 16,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 100,
  },
  userInfo: {},
  fullName: {
    color: Colors.textLight,
    fontWeight: 'bold',
  },
  username: {
    color: Colors.textLight,
  },
  about: {
    color: Colors.grayDarken,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
