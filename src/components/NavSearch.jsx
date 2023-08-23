import { omdbApi } from "../api/omdbApi";
import { useEffect } from "react";

export const NavSearch = ({
  search,
  setSearch,
  setSearchResults,
  searchResults,
}) => {
  // useEffect(() => {

  // }, [searchResults]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await omdbApi(search);
      setSearchResults(results);
    } catch (error) {
      alert.error("Error fetching search results:", error);
    }
    setSearch("");
  };
  return (
    <div className="m-5 ">
      <form className="flex items-center justify-center gap-10">
        <input
          type="text"
          placeholder="Search movies here!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="seach"
          className="text-xl w-2/5 border-slate-700 shadow-lg p-1 rounded-xl text-center"
        />
        <input
          className="bg-slate-700 w-40 uppercase text-orange-400 py-1 px-3 font-bold text-2xl rounded-xl hover:bg-slate-900 cursor-pointer"
          type="submit"
          value="Search"
          onClick={handleSearch}
        />
      </form>
    </div>
  );
};
