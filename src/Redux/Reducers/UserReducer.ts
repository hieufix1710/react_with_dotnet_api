import { LOGIN_SUCCESS } from "../../Constants/ActionTypes";

const initialState = {
  currentUser: {
    email: null,
    accessToken: null,
  },
  loadedAuth: false
};

const user = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case LOGIN_SUCCESS:
      window.localStorage.setItem('access_token', payload.user.accessToken);
      return {
        ...state,
        currentUser: {
          email: payload.user.email,
          accessToken: payload.user.accessToken,
        },
        loadedAuth: true
      };
    default:
      return {
        ...state,
        loadedAuth: true
      };
  }
};

export default user;
