import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../store/slice/news";
import fetchNews from "../utils/fetchNews";
import Loader from "../utils/Loader";
import getPublishDate from "../utils/getPublishDate";

function GetNews() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.news);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (news.length === 0) {
        dispatch(fetchNewsStart());
        try {
          const articles = await fetchNews();
          dispatch(fetchNewsSuccess(articles));
        } catch (error) {
          dispatch(fetchNewsFailure(error.message));
        }
      }
    };
    fetchData();
  }, [dispatch, news.length]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const data = news.filter((item) => item.title === title);
  const newsData = data[0];
  console.log(newsData);
  if (newsData === undefined) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center w-full min-h-screen my-10">
      <div className="flex flex-col justify-center items-start gap-5 h-fit mx-4 md:w-[80%] md:ml-10">
        <p className="text-5xl font-black">{newsData.title}</p>
        <p className="text-2xl font-semibold">{newsData.description}</p>
        <div className="flex justify-center items-start gap-10">
          <p>Author: {newsData.author}</p>
          <p>Published On: {getPublishDate(newsData.publishedAt)}</p>
        </div>
        <hr className="w-full bg-black h-[2px]" />
        <p className="text-lg font-normal">{newsData.content}</p>
        <Link
          to={newsData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Read Full Article
        </Link>
      </div>
    </div>
  );
}

export default GetNews;
