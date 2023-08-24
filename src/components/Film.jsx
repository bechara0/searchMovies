import { useState } from "react";
import { omdbApiById } from "../api/omdbApi";

const Film = ({ film }) => {
  const [info, setInfo] = useState([]);

  const { Title, Year, imdbID, Type, Poster } = film;

  const moreInfo = async () => {
    console.log("ID:", imdbID);
    try {
      const newInfo = await omdbApiById(imdbID);
      setInfo(newInfo);
      console.log("info", info);
    } catch (error) {
      alert.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="w-2/8  flex flex-col justify-center align-middle text-center">
      <img className="h-115" src={Poster} alt="poster of the film" />
      <h1 className="text-xl uppercase font-bold mt-5">{Title}</h1>
      <p className="text-lg uppercase font-semibold mt-2">
        {Year} - {Type}
      </p>
      <button
        className="bg-slate-800 rounded-2xl text-orange-500 m-auto mt-4 text-xl font-bold w-40 p-1 hover:bg-slate-900 "
        type="submit"
        onClick={moreInfo}
      >
        + INFO
      </button>
    </div>
  );
};

export default Film;
