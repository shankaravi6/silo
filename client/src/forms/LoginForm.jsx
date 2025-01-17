import React, { useState } from "react";
import {
  SoFlex,
  SoForm,
  SoSpan,
  SoTitle,
  SoTypography,
} from "../styledcomponents/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setAlert,
  setLoginData,
  setLoginResponse,
  setRegisterData,
  setType,
} from "../state";
import { Formik } from "formik";
import * as yup from "yup";
import SoInput from "../components/SoInput";
import { makeApiCall } from "../utils/ApiCall";
import SoButton from "../components/SoButton";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useThemeContext } from "../themeprovider/ThemeProvider";

const LoginForm = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxData = useSelector((state) => state.silo);

  const {palette} = useThemeContext()

  const handleGoogleLogin = (response, setFieldValue) => {
    var data = jwtDecode(response.credential);
    console.log(data);
    const { email_verified, given_name, family_name, email } = data;
    const values = {
      firstName: family_name,
      lastName: given_name,
      email,
      password: "",
      email_verified,
    };
    console.log("Google data", values);
    if (type === "register") {
    setFieldValue('firstName', given_name);
    setFieldValue('lastName', family_name);
    setFieldValue('email', email);
    } else {
      handleFormSubmit(values);
    }
    
  };

  const handleFacebookLogin = (response,setFieldValue) => {
    console.log(response);
    const { first_name, last_name, email, graphDomain } = response;
    const values = {
      firstName: first_name,
      lastName: last_name,
      email,
      password: "",
      graphDomain,
    };
    console.log("Facebook data", values);
    if (type === "register") {
    setFieldValue('firstName', first_name);
    setFieldValue('lastName', last_name);
    setFieldValue('email', email);
    } else {
      handleFormSubmit(values);
    }


  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    if (type === "register") {
      dispatch(setRegisterData(values));
      const registerResponse = await makeApiCall(
        "/user/register",
        "POST",
        values
      );
      console.log("registerResponse", registerResponse);
      if (registerResponse.message == "success") {
        dispatch(
          setAlert({ open: true, msg: registerResponse.desc, type: "success" })
        );
        //navigate("/home");
      } else {
        dispatch(
          setAlert({ open: true, msg: registerResponse.desc, type: "error" })
        );
      }
    }
    if (type === "login") {
      dispatch(setLoginData(values));
      const loginResponse = await makeApiCall("/user/login", "POST", values);
      console.log("loginResponse", loginResponse);
      if (loginResponse.message == "success") {
        // dispatch(
        //   setAlert({ open: true, msg: loginResponse.desc, type: "success" })
        // );
        dispatch(setLoginResponse(loginResponse));
        localStorage.setItem("token", loginResponse.jwtToken)
        navigate("/home");
      } else
        dispatch(
          setAlert({ open: true, msg: loginResponse.desc, type: "error" })
        );
    }
    onSubmitProps.resetForm();
  };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const regsiterSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    password: yup
      .string()
      .required("required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(passwordRules, { message: "Please create a stronger password" }),
    confirmPassword: yup
      .string()
      .required("required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(passwordRules, { message: "Please create a stronger password" })
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("required"),
    password: yup
      .string()
      .required("required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(passwordRules, { message: "Please create a stronger password" }),
  });

  const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialValuesLogin = {
    email: "",
    password: "",
  };

  return (
    <SoFlex display="flex" dir="column" w="100%">
      <SoTitle ls='20px' fs='clamp(1.5rem, 5vw, 2.5rem)'>{type == "login" ? "Login" : "Register"}</SoTitle>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={
          type === "login" ? initialValuesLogin : initialValuesRegister
        }
        validationSchema={
          type === "login"
            ? loginSchema
            : type === "register"
            ? regsiterSchema
            : null
        }
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <>
            <SoForm
            w="100%"
              onSubmit={handleSubmit}
            >
            <SoFlex 
              dir="column"
              gap="15px"
              w="100%"
              p="15px 50px 25px 50px">
              {type == "login" ? (
                <></>
              ) : (
                <SoFlex dir='row' w="100%" gap="15px">
                  <SoInput
                    placeholder="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="firstName"
                    value={values.firstName}
                    err={touched.firstName && errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <SoInput
                    placeholder="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    err={touched.lastName && errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </SoFlex>
              )}
              <SoInput
                placeholder="Email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                err={touched.email && errors.email}
                value={values.email}
                helperText={touched.email && errors.email}
              />
              <SoInput
                placeholder="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                err={touched.password && errors.password}
                helperText={touched.password && errors.password}
              />
              {type == "login" ? (
                <></>
              ) : (
                <SoInput
                  placeholder="Confirm Password"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                  err={touched.confirmPassword && errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              )}
              <SoButton type="submit" style={{ marginTop: "5px" }}>
                {type == "login" ? "Sign In" : "Sign Up"}
              </SoButton>
              </SoFlex>
            </SoForm>

            <SoTypography fs='clamp(1rem, 5vw, 1.1rem)' className='text-center'>
              {type == "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <SoSpan fs='clamp(1rem, 5vw, 1.1rem)'
                className='underline cursor-pointer'
                onClick={() => dispatch(setType())}
              >
                {type == "login" ? "Register" : "Login"}
              </SoSpan>
            </SoTypography>
            <SoTypography className='text-center' fs='clamp(1rem, 5vw, 1.1rem)' p="10px 0 0 0">
              Or
            </SoTypography>
            <SoFlex bs='unset' gap="15px" padding="10px 0">
              <GoogleOAuthProvider clientId="371665581818-tgjhvkqgp2ijcln872qr22rgj3hf274u.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(response) => handleGoogleLogin(response, setFieldValue)}
                  onError={() => console.log("Error")}
                  clientId="371665581818-tgjhvkqgp2ijcln872qr22rgj3hf274u.apps.googleusercontent.com"
                  scopes={[
                    "profile",
                    "email",
                    "https://www.googleapis.com/auth/user.phonenumbers.read",
                    "https://www.googleapis.com/auth/user.addresses.read",
                  ]}
                />
              </GoogleOAuthProvider>
              <LoginSocialFacebook
                appId="1100784461270320"
                onResolve={(response) => handleFacebookLogin(response.data, setFieldValue)}
                onReject={(error) => console.log(error)}
              >
                <FacebookLoginButton className="fb-log"
                  style={{ height: "37px",fontSize:"16px" }}
                />
              </LoginSocialFacebook>
            </SoFlex>
          </>
        )}
      </Formik>
    </SoFlex>
  );
};

export default LoginForm;
