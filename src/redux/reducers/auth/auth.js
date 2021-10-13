import * as TYPES from '../../types';

const initialState = {
  user: '',
};

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        user: actions.payload,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        user: actions.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
