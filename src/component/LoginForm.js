import React, { useEffect, useState } from "react"; // Import useState
import { connect } from "react-redux";
import {
  setEmailValid,
  setPasswordValid,
  setName,
  setClick,
  setRememberMe,
  setPasswordLengthError,
  setEmailError,
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
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
}

const LoginForm = (props) => {
  const [emailMessage, setEmailMessage] = useState(""); // State for email message
  const [passwordMessage, setPasswordMessage] = useState(""); // State for password message

  useEffect(() => {
    const savedEmail = window.localStorage.getItem("rememberedEmail");

    if (savedEmail) {
      try {
        const parsedEmail = JSON.parse(savedEmail);
        console.log(parsedEmail);

        props.setName(parsedEmail);
        props.setClick(true);
      } catch (error) {
        console.error("Error parsing savedEmail:", error);
      }
    }
  });

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isInvalid = !isEmailValid(email);

    props.setName(email);
    props.setEmailValid(!isInvalid);
    props.setEmailError(isInvalid);

    // Set email message
    setEmailMessage(isInvalid ? "Your email is not correct" : "Your email is correct");
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isPassword = isPasswordValid(password);

    // Set password message
    setPasswordMessage(isPassword ? "Your password is correct" : "Password requirements: 8+ characters, 1 digit, 1 special symbol, 1 uppercase letter");

    // Step 2: Update the state variable based on password length
    props.setPasswordLengthError(password.length < 8);

    props.setPasswordValid(isPassword);
  };

  const handleLogin = () => {
    if (props.isValid && props.isPassword) {
      props.setClick(true);
    } else {
      alert("You entered the wrong input. Try again");
    }
  };

  const handleLogout = () => {
    props.setClick(false); // Set isClick to false to show the login form
    localStorage.removeItem("rememberedEmail"); // Remove the email from localStorage when logging out
  };

  const handleCheck = () => {
    const rememberMeChecked = !props.isRemember;

    props.setRememberMe(rememberMeChecked);

    // If Remember Me is checked, save the email to localStorage
    if (rememberMeChecked) {
      const email = props.name;

      window.localStorage.setItem("rememberedEmail", JSON.stringify(email));
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
            <p className={props.isEmailError ? "text-red-600 mb-4" : "text-green-600 mb-4"}>{emailMessage}</p>

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
            <p className={props.passwordLengthError || !props.passwordValid ? "text-red-600 mb-4" : "text-green-600 mb-4"}>{passwordMessage}</p>

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
  isEmailError: state.isEmailError,
});

const mapDispatchToProps = {
  setEmailValid,
  setPasswordValid,
  setName,
  setClick,
  setRememberMe,
  setPasswordLengthError,
  setEmailError,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
