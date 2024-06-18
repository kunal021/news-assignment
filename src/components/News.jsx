import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../store/slice/news";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import fetchNews from "../utils/fetchNews";

function News({ currPage, category }) {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);

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

  console.log(news);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center inset-0 gap-10 h-full">
      {news.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col w-72 justify-center items-center gap-4 border rounded-md border-black hover:shadow-md transition-all duration-300"
        >
          <img
            src={item.urlToImage ? item.urlToImage : "image.png"}
            alt={item.author}
            className="h-44 w-72 object-cover rounded-t-md"
          />
          <div className="space-y-2 px-2">
            <p className="text-lg font-bold leading-5 h-20">{item.title}</p>
            <p className="text-sm h-32">
              {item.description ? item.description : item.content}
            </p>
          </div>
          <Link
            to={item.url}
            className="mb-4 px-5 py-2 text-center rounded-full bg-zinc-950 hover:bg-zinc-800 text-white transition-all duration-300"
            target="_blank"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default News;
