import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setClick,
  setName,
  setEmailValid,
  setRememberMe,
} from "./redux/actions/authActions";

const Mobilesize = (props) => {
  useEffect(() => {
    // Check if there is a previously saved email in localStorage
    const savedEmail = localStorage.getItem("rememberedEmail");
    console.log(savedEmail);
    // If there is a saved email, set it in state
    if (savedEmail) {
      props.setName(savedEmail);
      props.setRememberMe(true);
      props.setClick(true); // Set isClick to true to show the Logout component
    }
  });

  const handleClick = (e) => {
    props.setClick(!props.isClick);
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    props.setEmailValid(email);
    props.setName(email);
  };

  const handleLogout = (e) => {
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
      {props.isClick === false ? (
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/flow2.jpg"})`, // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="bg-black bg-opacity-30 p-8 rounded-lg shadow-md">
            <h3
              className="text-4xl text-center font-semibold mb-4
        text-white"
            >
              We are {""}
              <strong className="text-gray-500">MI</strong>
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-white font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  className="w-full text-black border border-black rounded px-2 py-1"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-white">
                  Password:
                </label>
                <input
                  type="password"
                  className="w-full border border-black rounded px-2 py-1"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onClick={handleCheck}
                  />
                  <label className="text-sm font-semibold text-white">
                    Remember Me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black  text-white rounded py-2"
                onClick={handleClick}
              >
                Login
              </button>
            </form>
            <div className="text-center text-white mt-4 ">
              Don't have an account?{" "}
              <a href="#home" className="text-black-">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/flow2.jpg"})`, // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="bg-black bg-opacity-30 p-8 rounded-lg shadow-md">
            <h2
              className="text-3xl text-center font-semibold mb-4
        text-white"
            >
              Hello{" "}
              <span className="text-gray-300">{props.name.split("@")[0]}</span>
            </h2>
            <button
              type="submit"
              className="w-full bg-black  text-white rounded py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isClick: state.isClick,
  isValid: state.isValid,
  name: state.name,
  isRemember: state.isRemember,
});

const mapDispatchToProps = {
  setClick,
  setEmailValid,
  setName,
  setRememberMe,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mobilesize);
