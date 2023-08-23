import ContentList from "./components/ContentList";
import Header from "./components/Header";
import { NavSearch } from "./components/NavSearch";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Header />
      <NavSearch
        search={search}
        setSearch={setSearch}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <ContentList searchResults={searchResults} />
    </>
  );
}

export default App;
