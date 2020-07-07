import { StyleSheet } from 'react-native';
import { MARGIN_HORIZONTAL } from '../../constants/Layout';

export default StyleSheet.create({
  containerWithMargin: {
    flex: 1,
    marginHorizontal: MARGIN_HORIZONTAL,
  },
  containerWithoutMargin: {
    flex: 1,
  },
});
