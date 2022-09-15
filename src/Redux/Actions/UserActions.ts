import jwtDecode from "jwt-decode";
import { LOGIN_SUCCESS } from "../../Constants/ActionTypes";

const detectUserInToken = () => (dispatch: any) => {
  const token = window.localStorage.getItem('access_token');
  try {
    const decodedData = jwtDecode(token!) as {sub: string};
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: {
          email: decodedData?.sub,
          accessToken: token,
        },
      }
    })
  } catch (e) {

  }

}

export { detectUserInToken }