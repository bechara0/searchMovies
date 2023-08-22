export const omdbApi = async (search) => {
  const url = "http://www.omdbapi.com/?";
  const apiKey = "apikey=acabbc56";
  let response = await fetch(`${url}${apiKey}&s=${search}&type-movie&page-1`);
  let commits = await response.json();
  return commits;
};
