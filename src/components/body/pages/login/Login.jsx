import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import { Formik } from "formik";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../../redux/loginSlice";
// import { userLogin } from "../../../store/loginSlice";

const Login = () => {
  const { error, loading } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitDataForLogin = (values) => {
    dispatch(userLogin(values));
  };

  return (
    <div className="loginwrapper">
      <ContentWrapper>
        <div className="form">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              submitDataForLogin(values);
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
              return errors;
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <h3 style={{ color: "red" }}>{error && error}</h3>
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

                <input type="submit" value="Login" className="inputbtn" />
                <p>Forgot Password?</p>
              </form>
            )}
          </Formik>
          <hr />
          <p className="signup">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Create one</span>
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Login;
