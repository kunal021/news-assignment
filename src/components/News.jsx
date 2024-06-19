import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../store/slice/news";
import Loader from "./Loader";
import fetchNews from "../utils/fetchNews";
import NewsComponent from "./NewsComponent";

function News({ currPage, category }) {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("news"));
    if (savedData) {
      setSaveData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(saveData));
  }, [saveData]);

  const handleSaveData = (data) => {
    const isDuplicate = saveData.some((el) => el.id === data.id);
    if (!isDuplicate) {
      //saving data if not present
      setSaveData((prevData) => [...prevData, data]);
    } else {
      // removing if data is already saved
      const updatedData = saveData.filter((el) => el.id !== data.id);
      setSaveData(updatedData);
      localStorage.setItem("news", JSON.stringify(updatedData));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchNewsStart());
      try {
        const articles = await fetchNews(currPage, category);
        dispatch(fetchNewsSuccess(articles));
      } catch (error) {
        dispatch(fetchNewsFailure(error.message));
      }
    };
    fetchData();
  }, [currPage, dispatch, category]);

  const result = news.news;

  if (loading || result === undefined) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return <NewsComponent result={result} handleSaveData={handleSaveData} />;
}

export default News;
