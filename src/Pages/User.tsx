import React from "react";
import { Link } from "react-router-dom";
import withAuthenticated from "../Components/HOCs/withAuthenticated";

const User = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h1>User Profile</h1>
      <Link to={"/"} className="text-blue-500">
        Move to Home
      </Link>
    </div>
  );
};

export default withAuthenticated(User);
