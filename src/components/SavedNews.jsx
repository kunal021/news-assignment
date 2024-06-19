import { useEffect, useState } from "react";
import NewsComponent from "./NewsComponent";
import Loader from "./Loader";
import { ArrowLeft } from "lucide-react";

function SavedNews() {
  const [data, setData] = useState([]);
  const [loading, steLoading] = useState(false);
  useEffect(() => {
    steLoading(true);
    const getData = JSON.parse(localStorage.getItem("news"));
    if (getData) {
      setData(getData);
    }
    steLoading(false);
  }, []);
  if (data.length === 0 && !loading) {
    return <p className="text-xl font-bold text-center">No Saved News</p>;
  }
  if (loading || data.length === 0) {
    <Loader />;
  }

  const handleDelete = (id) => {
    const updatedNews = data.filter((item) => item.id !== id);
    setData(updatedNews);
    localStorage.setItem("news", JSON.stringify(updatedNews));
  };

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="pb-4 flex flex-col items-center justify-center gap-4">
      <div
        onClick={handleBack}
        className="text-black font-medium flex gap-2 justify-center items-center cursor-pointer"
      >
        <ArrowLeft />
        <p className="hidden sm:block">Back</p>
      </div>
      <NewsComponent result={data} handleDelete={handleDelete} />
    </div>
  );
}

export default SavedNews;
