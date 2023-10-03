import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setEmailValid,
  setPasswordValid,
  setName,
  setClick,
  setRememberMe,
  setPasswordLengthError,
} from "./redux/actions/authActions";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import { Logout } from "./Logout";

// email validation
function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// password validation
function isPasswordValid(password) {
  const passwordRegex = /^(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

const LoginForm = (props) => {
  useEffect(() => {
    // Check if there is a previously saved email in localStorage
    const savedEmail = localStorage.getItem("rememberedEmail");
    console.log(savedEmail);
    // If there is a saved email, set it in state
    if (savedEmail) {
      props.setName(savedEmail);
      props.setRememberMe(true); // Set Remember Me to true
      props.setClick(true); // Set isClick to true to show the Logout component
    }
  });

  const handleEmailChange = (e) => {
    const email = e.target.value;

    props.setName(email);
    const isInvalid = isEmailValid(email);
    props.setEmailValid(isInvalid);
    console.log(isInvalid);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isPassword = isPasswordValid(password);

    // Step 2: Update the state variable based on password length
    props.setPasswordLengthError(password.length < 8);

    props.setPasswordValid(isPassword);
    console.log(isPassword);
  };

  const handleLogin = () => {
    // For simplicity, let's assume the user is authenticated if they have a valid email and password
    if (props.isValid && props.passwordValid) {
      props.setClick(true); // Set isClick to true to show the Logout component
      // Save the email to localStorage if Remember Me is checked
      if (props.isRemember) {
        localStorage.setItem("rememberedEmail", props.name);
      }
    }
  };

  const handleLogout = () => {
    props.setClick(false); // Set isClick to false to show the login form
    localStorage.removeItem("rememberedEmail"); // Remove the email from localStorage when logging out
  };

  const handleCheck = () => {
    const rememberMeChecked = !props.isRemember; // Toggle the value

    props.setRememberMe(rememberMeChecked);

    // If Remember Me is checked, save the email to localStorage
    if (rememberMeChecked) {
      localStorage.setItem("rememberedEmail", props.name);
    } else {
      localStorage.removeItem("rememberedEmail"); // Remove the email from localStorage
    }
  };

  return (
    <>
      {props.isClick ? (
        <Logout name={props.name} onClick={handleLogout} />
      ) : (
        <div>
          <h1 className="text-4xl font-semibold text-black mt-2 ">
            <strong> We are</strong>{" "}
            <span className="text-gray-500">
              <strong>MI</strong>
            </span>
          </h1>
          <p className="mt-4 text-black ">Welcome back! Please Login </p>
          <p className=" text-black "> to your account.</p>
          <form className="mt-4 ">
            <InputField
              label="Email:"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleEmailChange}
              class={
                props.isValid === true
                  ? "w-[67%] border border-black py-2 px-3"
                  : "w-[67%] border border-red-600 py-2 px-3"
              }
            />
          

            <InputField
              label="Password:"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              class={
                props.passwordValid === true
                  ? "w-[67%] border border-black py-2 px-3"
                  : "w-[67%] border border-red-600 py-2 px-3"
              }
            />
              {/* Step 3: Display the error message */}
            {props.passwordLengthError && (
              <p className="text-red-600 mb-4">
                Password must be at least 8 characters
              </p>
            )}
            <Checkbox label="Remember me" id="remember" onClick={handleCheck} />

            <button
              onClick={handleLogin}
              className="bg-black mt-5 text-white py-2 px-4 hover:bg-white hover:text-black transition duration-300"
            >
              Login
            </button>
            <button className="border  border-black mt-5 text-black py-2 px-4 ml-5 hover:bg-black hover:text-white transition duration-300">
              Signup
            </button>
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isValid: state.isValid,
  passwordValid: state.passwordValid,
  isClick: state.isClick,
  isRemember: state.isRemember,
  name: state.name,
  passwordLengthError: state.passwordLengthError,
});

const mapDispatchToProps = {
  setEmailValid,
  setPasswordValid,
  setName,
  setClick,
  setRememberMe,
  setPasswordLengthError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
