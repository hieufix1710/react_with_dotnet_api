import { combineReducers } from "redux";
import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import ArticleReducer from './ArticleReducer';


export default combineReducers({
  app: AppReducer,
  user: UserReducer,
  article: ArticleReducer
})