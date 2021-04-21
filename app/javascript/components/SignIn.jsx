import React, { useContext, useState, useReducer } from "react";
import axios from "axios";
import { Action, Context, Reducer } from "../store/state";
import "./SignIn.css";
const SignIn = () => {
  const [signin, setSignin] = useState(true);
  const state = useContext(Context);
  const [_, dispatch]=useReducer(Reducer, state);
  const handleSignup = (e) => {
    e.preventDefault();
    const currentMail =  document.getElementById("signup_email")?.value;
    axios
      .post("/students", {
        user: {
          email: currentMail,
          password: document.getElementById("signup_password").value,
          password_confirmation: document.getElementById(
            "signup_password_confirmation"
          ).value,
        },
      })
      .then(function (response) {
        //   dispatch({type: Action.SIGNIN, data:currentMail})
        //   that.props.changePage("delete");
        // that.props.updateCurrentUser(email);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>
            {signin
              ? "If you already have account please login, or sign up below"
              : "If you didn't log in before please sign up, or log in below"}
          </p>
          <input
            type="button"
            name=""
            onClick={() => setSignin(!signin)}
            value={signin ? "Sign Up" : "Login"}
          />
          <br />
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-defaultValue="true"
              >
                Employee
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-defaultValue="false"
              >
                Hirer
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">
                {signin ? "Login Here" : "Sign Up Here"}
              </h3>
              {signin ? (
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Paasowrd"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Login"
                    />
                  </div>
                </div>
              ) : (
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="signup_password"
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="signup_password_confirmation"
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="signup_email"
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        minLength="10"
                        maxLength="10"
                        name="txtEmpPhone"
                        className="form-control"
                        placeholder="Your Phone *"
                      />
                    </div>
                    <input
                      type="buttom"
                      className="btnRegister"
                      value="Register"
                      onChange={handleSignup}
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className="tab-pane fade show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <h3 className="register-heading">Apply as a Hirer</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      maxLength="10"
                      minLength="10"
                      className="form-control"
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option className="hidden" defaultValue disabled>
                        Please select your Sequrity Question
                      </option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                      <option>What is your Pet Name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="`Answer *"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
