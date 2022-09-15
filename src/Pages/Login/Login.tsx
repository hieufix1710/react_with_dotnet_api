import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../Constants/ActionTypes";
import { BASE_URL_API } from "../../Constants/URLs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigatorRoute = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (window.location.pathname.indexOf("sign-up") >= 1){
      setIsSignUp(true);
    }
  }, [isSignUp])

  const _handleSubmit = async (values: any) => {
    try {
      const result = await axios.post(`${BASE_URL_API}/session`, values);
      if (result && result.data?.accessToken) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: {
              email: values.email,
              accessToken: result.data?.accessToken,
            },
          },
        });
        setErrors({ email: "", password: "" });
        navigatorRoute("/");
        return;
      }
    } catch (e: any) {
      setErrors({ ...errors, password: "Invalid username or password" });
    }
  };

  const resetErrors = () => {
    setErrors({
      email: "",
      password: "",
    });
  };

  const _handleSubmitSignup = async (values: any) => {
    const result = await axios.post(`${BASE_URL_API}/user`, values);
    setIsSignUp(!isSignUp);
    if (result.status === 200) {
      delete values.name;
      await _handleSubmit(values);
    }
  }

  return (
    <div className="max-w-sm mx-auto border border-gray-300 mt-2">
      <div className="flex flex-row justify-center align-center">
        <div className="w-2/5 my-3	">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt=""
            className="max-w-full"
          />
        </div>
      </div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={isSignUp ? _handleSubmitSignup : _handleSubmit}
      >
        {() => (
          <Form className="flex flex-col align-center p-2">
            {
              isSignUp ? 
              <Field
              name="name"
              type="name"
              onFocus={() => (errors.password ? resetErrors() : "")}
              placeholder="Enter your name"
              className="border border-gray-300 p-1"
            /> : ''
            }
            <Field
              name="email"
              type="email"
              onFocus={() => (errors.password ? resetErrors() : "")}
              placeholder="Enter your email"
              className="border border-gray-300 p-1 mt-2"
            />
            <Field
              name="password"
              type="password"
              onFocus={() => (errors.password ? resetErrors() : "")}
              placeholder="Enter password"
              className="border border-gray-300 p-1 mt-2"
            />
            <small style={{ color: "red", float: "left" }}>
              {errors && errors.password ? errors.password : ""}
            </small>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-1 mt-1"
            >
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
