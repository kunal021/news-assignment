import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = "https://newsapi.org/v2/everything";
const categoryWise = "https://newsapi.org/v2/top-headlines";

const fetchNews = async (currPage, category) => {
  try {
    let response;
    if (category.length === 0) {
      response = await axios.get(
        `${baseUrl}?apiKey=${apiKey}&pageSize=${1}&q="-[Removed]"&page=${currPage}`
      );
    } else {
      response = await axios.get(
        `${categoryWise}?apiKey=${apiKey}&pageSize=${1}&page=${currPage}&category=${category}`
      );
    }
    return response.data.articles;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchNews;
