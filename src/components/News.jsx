import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../store/slice/news";
import { fetchSaveSuccess } from "../store/slice/save";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import fetchNews from "../utils/fetchNews";
import truncateData from "../utils/wordLimit";
import NewsComponent from "./NewsComponent";

function News({ currPage, category }) {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);
  const { save } = useSelector((state) => state.save);

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

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(save));
  }, [save]);

  const handleSave = (data) => {
    const isDuplicate = save.some((el) => el.id === data.id);
    if (!isDuplicate) {
      const updatedSave = [...save, data];
      dispatch(fetchSaveSuccess(updatedSave));
    } else {
      return;
    }
  };

  if (loading || result === undefined) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return <NewsComponent result={result} />;
}

export default News;
