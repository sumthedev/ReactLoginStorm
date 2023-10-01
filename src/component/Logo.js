import React from "react";

export const Logo = () => {
  return (
    <>
      <nav className="py-4">
        <div className="container flex items-center justify-between space-x-4">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo"
            className="w-[15%]"
          />
        </div>
      </nav>
    </>
  );
};
