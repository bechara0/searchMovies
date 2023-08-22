import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-700">
      <div className=" flex items-center justify-center gap-5 p-7">
        <img
          src="./src/img/cinema.png"
          alt="picture logo of cinema"
          className="w-16"
        />
        <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-200 to-orange-600 bg-clip-text text-transparent uppercase">
          Rincon del atorrante
        </p>
        <img
          src="./src/img/cinema.png"
          alt="picture logo of cinema"
          className="w-16"
        />
      </div>
    </div>
  );
};

export default Header;
