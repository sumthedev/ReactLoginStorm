// import React from "react";

// export const Greetings = () => {
//   return (
//     <div>
//       {" "}
//       <h1 className="text-4xl font-semibold text-black mt-2 ">
//         <strong> We are</strong>{" "}
//         <span className="text-gray-500">
//           <strong>MI</strong>
//         </span>
//       </h1>
//       <p className="mt-4 text-black ">Welcome back! Please Login </p>
//       <p className=" text-black "> to your account.</p>
//     </div>
//   );
// };

import React, { useState } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";

// email validation
function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//password validation
function isPasswordValid(password) {
  const passwordRegex = /^(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

function LoginForm(props) {
  const [isValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isClick, setHandleClick] = useState(false);
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;

    setName(email);
    const isInvalid = isEmailValid(email);
    setEmailValid(isInvalid);
    console.log(isInvalid);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const isPassword = isPasswordValid(password);
    setPasswordValid(isPassword);
    console.log(isPassword);
  };

  const handleClick = (e) => {
    console.log(isClick);
    setHandleClick(!isClick);
    e.preventDefault();
  };

  return (
    <>
      {isClick === false ? (
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
                isValid === true
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
                passwordValid === true
                  ? "w-[67%] border border-black py-2 px-3"
                  : "w-[67%] border border-red-600 py-2 px-3"
              }
            />

            <Checkbox label="Remember me" id="remember" />

            <button
              onClick={handleClick}
              className="bg-black mt-5 text-white py-2 px-4 hover:bg-white hover:text-black transition duration-300"
            >
              Login
            </button>
            <button
              className="border  border-black mt-5
     text-black py-2 px-4  ml-5 hover:bg-black
      hover:text-white transition duration-300"
            >
              Signup
            </button>
          </form>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-black mt-2 ">
          <strong> Hello</strong>{" "}
          <span className="text-gray-500">
            <strong> {name} </strong>
          </span>
        </h1>
      )}
    </>
  );
}

export default LoginForm;
