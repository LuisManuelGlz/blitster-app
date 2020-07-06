import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const PADDING_HORIZONTAL = 16;

const screen = {
  width,
  height,
};

export { screen, PADDING_HORIZONTAL };
