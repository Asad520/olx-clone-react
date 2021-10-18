import { signOutUser, socialMediaAuth } from '../../../utils/services/auth';
import * as TYPES from '../../types';

const loginSuccess = (user) => {
  return {
    type: TYPES.LOGIN,
    payload: user,
  };
};

export const login = (provider) => {
  return async (dispatch) => {
    try {
      const { user } = await socialMediaAuth(provider);
      console.log('action success login', user.displayName);
      dispatch(loginSuccess(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const response = await signOutUser();
      if (response) {
        console.log('action success logout!');
        dispatch({
          type: TYPES.LOGOUT,
          payload: '',
        });
      } else {
        console.log('Error logging out user');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
