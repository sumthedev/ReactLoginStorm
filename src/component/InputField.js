import React from "react";

function InputField(props) {
  return (
    <div className="mb-4">
      <label className="block mb-5 mt-4 text-gray-700 font-bold">
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        className={props.class}
      />
    </div>
  );
}

export default InputField;
