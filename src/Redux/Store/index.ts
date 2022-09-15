import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Reducers";
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

export default store;