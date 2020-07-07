import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const MARGIN_HORIZONTAL = 32;
const PADDING_HORIZONTAL = 16;

const screen = {
  width,
  height,
};

export { screen, MARGIN_HORIZONTAL, PADDING_HORIZONTAL };
