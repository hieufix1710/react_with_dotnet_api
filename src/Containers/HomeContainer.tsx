import { connect } from "react-redux"
import Home from "../Pages/Home"
import { getArticle, getUser } from "../Redux/Selectors/CommonSelector"

const mapStateToProps = (state: any) => {
  return {
    ...getUser(state),
    ...getArticle(state)
  }
}

export default connect(mapStateToProps, {})(Home)