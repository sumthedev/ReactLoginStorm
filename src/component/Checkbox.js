import React from "react";

function Checkbox({ label, id, onClick }) {
  return (
    <div className="mb-4 flex items-center">
      <input type="checkbox" id={id} className="mr-2" onClick={onClick} />
      <label htmlFor={id} className="text-black">
        {label}
      </label>
      <div className="ml-32 text-black cursor-pointer hover:underline">
        Forgot Password
      </div>
    </div>
  );
}

export default Checkbox;
