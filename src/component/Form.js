import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import Mobilesize from "./mobileSize";

export const Form = () => {
  const [isSize, setMobileSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1064) {
      setMobileSize(true);
    } else {
      setMobileSize(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSize === false ? (
        <div className="flex">
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Logo"
              className=" relative w-[8%] mb-6 -mt-14"
            />

            <LoginForm />

            <p className="mt-10 text-black text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <p className=" font-semibold text-black text-sm">
              libero omnis debitis quis quos ratione ullam
            </p>
          </div>

          <div
            className="w-1/2 bg-cover bg-center h-screen"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/flow2.jpg)`,
            }}
          >
            <Navbar />
            <div
              className="h-1/2 w-1/2 bg-black rounded-md bg-clip-padding backdrop-filter 
          backdrop-blur-sm bg-opacity-20  relative mx-auto  mt-24 "
            >
              <img src={`${process.env.PUBLIC_URL}/m3.png`} alt="m" />
            </div>
          </div>
        </div>
      ) : (
        <Mobilesize />
      )}
    </>
  );
};
