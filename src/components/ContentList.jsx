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
    <div>
      {movies.length > 0 ? (
        movies.map((film) => <Film key={film.imdbID} film={film} />)
      ) : (
        <h1>Sin resultado</h1>
      )}
    </div>
  );
};

export default ContentList;
