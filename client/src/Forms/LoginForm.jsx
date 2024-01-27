import React from "react";
import {
  SoButton,
  SoCover,
  SoFlex,
  SoForm,
  SoSpan,
  SoTitle,
  SoTypography,
} from "../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setLoginData, setRegisterData, setType } from "../State";
import { Formik } from "formik";
import * as yup from "yup";
import SoInput from "../Components/SoInput";
import { makeApiCall } from "../Functions/APICall";

const LoginForm = ({ type }) => {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.silo);
  

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
    if(type === "register") {
    dispatch(setRegisterData(values))
    const registerResponse =  await makeApiCall("/user/register","POST", values)
    console.log("registerResponse", registerResponse)
    }
    if(type === "login") {
    dispatch(setLoginData(values))
    const loginResponse =  await makeApiCall("/user/login","POST", values)
    console.log("loginResponse", loginResponse)
    }
  };

  const regsiterSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("required"),
  });

  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("required"),
    password: yup.string().required("required"),
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

  const setJoinType = () => {

  }
  return (
    <SoCover display="flex" jc="center" dir="column" width="100%">
      <SoTitle>{type == "login" ? "Login" : "Register"}</SoTitle>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={
          type === "login" ? initialValuesLogin : initialValuesRegister
        }
        validationSchema={type === "login" ? loginSchema : regsiterSchema}
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
            onSubmit={handleSubmit}
            display="flex"
            jc="center"
            dir="column"
            gap="20px"
            width="100%"
            p="25px 50px"
          >
            {type == "login" ? (
              <></>
            ) : (
              <SoFlex gap="25px">
                <SoInput
                  placeholder="First Name"
                  width="100%"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="firstName"
                  value={values.firstName}
                  err={Boolean(touched.firstName) && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <SoInput
                  placeholder="Last Name"
                  width="100%"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  err={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </SoFlex>
            )}
            <SoInput
              placeholder="Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              err={Boolean(touched.email) && Boolean(errors.email)}
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
              err={Boolean(touched.password) && Boolean(errors.password)}
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
                err={
                  Boolean(touched.confirmPassword) &&
                  Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
              />
            )}
            <SoButton type="submit">
              {type == "login" ? "Sign In" : "Sign Up"}
            </SoButton>
          </SoForm>
       
      <SoTypography style={{ textAlign: "center" }}>
        {type == "login"
          ? "Don't have an account "
          : "Already have an account "}
        <SoSpan
          style={{ textDecoration: "underline", cursor: "pointer" }}
          className="set-login"
          onClick={() => dispatch(setType())}
        >
          {type == "login" ? "Register" : "Login"}
        </SoSpan>
      </SoTypography>
      </>
      )}
      </Formik>
    </SoCover>
  );
};

export default LoginForm;
