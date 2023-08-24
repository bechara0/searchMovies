const url = "http://www.omdbapi.com/?";
const apiKey = "apikey=acabbc56";

export const omdbApi = async (search) => {
  let response = await fetch(`${url}${apiKey}&s=${search}&type-movie&page-1`);
  let commits = await response.json();
  return commits;
};

export const omdbApiById = async (id) => {
  let urlInfo = `${url}${apiKey}&type-movie&plot-short&i-${id}`;
  let response = await fetch(urlInfo);
  let results = await response.json();
  console.log(urlInfo);
  return results;
};
