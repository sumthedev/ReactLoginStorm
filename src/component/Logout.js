import React from "react";

export const Logout = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-black mt-2 ">
        <strong> Hello</strong>{" "}
        <span className="text-gray-500">
          <strong> {props.name.split("@")[0]} </strong>
        </span>
      </h1>
      <button
        onClick={props.onClick}
        className="border  border-black mt-10 text-black py-2 px-4  ml-1 hover:bg-black hover:text-white transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};
