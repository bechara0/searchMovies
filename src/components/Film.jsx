import React from "react";

const Film = ({ film }) => {
  const { Title, Year, imdbID, Type, Poster } = film;

  return (
    <div>
      <img src={Poster} alt="poster of the film" />
      <h1>{Title}</h1>
      <p>{Year}</p>
      <p>{Type}</p>
    </div>
  );
};

export default Film;
