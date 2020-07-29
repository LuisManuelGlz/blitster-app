import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { loggedInClient } from '../../../api';
import { setIsFetchingPosts, setPosts } from './actions';
import { setAlert } from '../alert/actions';

export const fetchPosts = () => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
  dispatch(setIsFetchingPosts(true));

  try {
    const { data } = await loggedInClient.get('posts');
    dispatch(setPosts(data));
  } catch (error) {
    const { status, data } = error.response;
    if (status === 404 || status === 500) {
      const id = uuidv4();
      const alert = { id, message: data.message, typeAlert: 'error' };
      dispatch(setAlert(alert));
    }
  } finally {
    dispatch(setIsFetchingPosts(false));
  }
};
