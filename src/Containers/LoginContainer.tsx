import { connect } from "react-redux";
import Login from "../Pages/Login/Login";

const mapStateToProps = (state: any) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(Login);
