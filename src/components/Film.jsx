import { useEffect, useState } from "react";
import { omdbApiById } from "../api/omdbApi";

const Film = ({ film }) => {
  const [info, setInfo] = useState([]);

  const { Title, Year, imdbID, Type, Poster } = film;

  const moreInfo = async () => {
    const newInfo = await omdbApiById(imdbID);
    setInfo(newInfo);
  };

  const { ratings = [] } = info.Ratings || {};

  return (
    <div className="w-2/8  flex flex-col justify-center align-middle text-center">
      <img className="h-115 max-w-1/3" src={Poster} alt="poster of the film" />
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
      <div className="max-w-1/5">
        <div className="flex flex-col m-5 text-lg">
          <div className="flex justify-center gap-20">
            <p className="font-bold">
              Rated: <span className="font-normal">{info.Rated}</span>
            </p>
            <p className="font-bold">
              Runtime: <span className="font-normal">{info.Runtime}</span>
            </p>
          </div>
          <p className="m-3 font-bold">
            Actors: <span className="font-normal">{info.Actors}</span>
          </p>
          <p className="font-bold">
            Writer: <span className="font-normal">{info.Writer}</span>
          </p>
          <p className="m-3 leading-7 font-bold">
            Plot: <span className="font-normal">{info.Plot}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Film;
