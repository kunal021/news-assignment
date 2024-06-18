import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = "https://api.currentsapi.services/v1/search";

const fetchNews = async (currPage, category) => {
  try {
    let response;
    response = await axios.get(
      `${baseUrl}?apiKey=${apiKey}&page_size=${10}&page_number=${currPage}&category=${category}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchNews;
