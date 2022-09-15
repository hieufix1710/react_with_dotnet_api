import { connect } from "react-redux"
import Article from "../Pages/Article"
import { getUser } from "../Redux/Selectors/CommonSelector"

const mapStateToProps = (state: any) => {
  return {
    ...getUser(state)
  }
}

export default connect(mapStateToProps, {})(Article)