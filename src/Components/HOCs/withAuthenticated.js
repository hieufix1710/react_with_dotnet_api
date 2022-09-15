import { Navigate } from "react-router-dom";

const withAuthenticated = (InnerLayout) => {

  const Authenticated = ({ currentUser, loadedAuth, ...props }) => {
    if (!loadedAuth) {
      return <span>Loading</span>;
    } else if (loadedAuth && !currentUser.accessToken) {
      return <Navigate to={"/login"} />;
    }

    return (
      <InnerLayout
        currentUser={currentUser}
        loadedAuth={loadedAuth}
        {...props}
      />
    );
  };

  return Authenticated;
};

export default withAuthenticated;
