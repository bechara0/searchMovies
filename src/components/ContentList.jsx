import { useState, useEffect, useRef } from "react";
import Film from "./Film";

const ContentList = ({ searchResults }) => {
  let { Search } = searchResults;

  const [movies, setMovies] = useState([]);
  const listenerRef = useRef(null);
  useEffect(() => {
    if (searchResults.Search) {
      setMovies([...Search]);
    }
  }, [searchResults]);

  return (
    <div className="flex justify-center align-center">
      <div className="flex gap-20 w-5/6 m-10 flex-wrap justify-center align-center">
        {movies.length > 0 ? (
          movies.map((film) => <Film key={film.imdbID} film={film} />)
        ) : (
          <h1 className="uppercase text-2xl bg-red-700 p-2 rounded-2xl font-bold">
            looking for search results
          </h1>
        )}
      </div>
    </div>
  );
};

export default ContentList;
