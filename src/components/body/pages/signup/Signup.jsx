import React from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import { Formik } from "formik";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./Signup.scss";
import { useDispatch, useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import { userSignup } from "../../../../redux/signupSlice";

const Signup = () => {
  const { errormessage, signupSuccess } = useSelector((state) => state.signup);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = (values) => {
    dispatch(userSignup(values));
  };
  if (signupSuccess) {
    alert("Signup Successfully !");
    navigate("/login");
  }

  return (
    <div className="loginwrapper">
      <ContentWrapper>
        <div className="signupform">
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmpassword: "",
              firstname: "",
              lastname: "",
            }}
            onSubmit={(values) => {
              signup(values);
            }}
            validate={(values) => {
              const emailRegex = new RegExp(
                /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                "gm"
              );
              const errors = {};
              if (!values.email) {
                errors.email = "required";
              } else if (!emailRegex.test(values.email)) {
                errors.email = "Invalid email !";
              }
              if (!values.password) {
                errors.password = "required !";
              } else if (values.password.length < 8) {
                errors.password = "Password mustbe me 8 character !";
              }
              if (!values.confirmpassword) {
                errors.confirmpassword = "required";
              }
              if (values.password != values.confirmpassword) {
                errors.confirmpassword = "Password doesnot match !";
              }
              if (!values.firstname) {
                errors.firstname = "required !";
              }
              if (!values.lastname) {
                errors.lastname = "required !";
              }
              return errors;
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form action="" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <h3 style={{ color: "red" }}>{errormessage && errormessage}</h3>
                <div className="firstname">
                  <span>
                    <RxAvatar />
                  </span>
                  <input
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.firstname}
                </span>
                <div className="lastname">
                  <span>
                    <RxAvatar />
                  </span>
                  <input
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.lastname}
                </span>
                <div className="email">
                  <span>
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.email}
                </span>
                <div className="password">
                  <span>
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.password}
                </span>
                <div className="password">
                  <span>
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={values.confirmpassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                  />
                </div>
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.confirmpassword}
                </span>

                <input type="submit" value="SignUp" className="inputbtn" />
                <p>Forgot Password?</p>
              </form>
            )}
          </Formik>
          <hr />
          <p className="signup">
            Allready have an account?{" "}
            <span onClick={() => navigate("/login")}>login</span>
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Signup;
