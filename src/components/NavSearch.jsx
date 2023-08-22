import { omdbApi } from "../api/omdbApi";
import { useEffect } from "react";

export const NavSearch = ({
  search,
  setSearch,
  setSearchResults,
  searchResults,
}) => {
  useEffect(() => {
    console.log("Resultados", searchResults); // Esto se ejecutará cuando cambie el valor de searchResults
  }, [searchResults]);
  const handleSearch = (e) => {
    e.preventDefault();
    const results = omdbApi(search).then((results) => {
      setSearchResults(results);
    });
    console.log("results", results);

    setSearch("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search movies here!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="seach"
        />
        <input type="submit" value="Search" onClick={handleSearch} />
      </form>
    </div>
  );
};
