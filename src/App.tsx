import React, { Suspense, useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Route as RouteType } from "./Types/shared.type";
import { routers } from "./routes";
import { connect } from "react-redux";
import { getUser } from "./Redux/Selectors/CommonSelector";
import { detectUserInToken } from "./Redux/Actions/UserActions";

function App({ ...props }) {
  const {detectUserInToken} = props;

  useEffect(() => {
    detectUserInToken();
  }, [detectUserInToken])

  const renderRoutes = useCallback((routes: RouteType[]) => {
    let result = null;
    result = routes.map((route: RouteType, i) => {
      let { path, layout: Layout, container: Component } = route;

      return (
        <Route
          key={i}
          path={path}
          element={
            <Suspense fallback={<Layout />}>
              <Component />
            </Suspense>
          }
        />
      );
    });
    return result;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{renderRoutes(routers)}</Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    ...getUser(state),
  };
};

export default connect(mapStateToProps, {detectUserInToken})(App);
