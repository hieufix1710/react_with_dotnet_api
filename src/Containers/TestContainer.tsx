import { connect } from "react-redux";
import Test from "../Components/Test";
import { getUser } from "../Redux/Selectors/CommonSelector";

const mapStateToProps = (state: any) => {
  return {
    ...getUser(state),
  };
};

export default connect(mapStateToProps, {})(Test);
