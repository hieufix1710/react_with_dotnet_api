import { connect } from "react-redux";
import User from "../Pages/User";
import { getUser } from "../Redux/Selectors/CommonSelector";

const mapStateToProps = (state: any) => {
  return {
    ...getUser(state),
  };
};

export default connect(mapStateToProps, {})(User);
