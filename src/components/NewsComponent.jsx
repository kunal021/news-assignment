import { Link } from "react-router-dom";
import truncateData from "../utils/wordLimit";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

function NewsComponent({
  result,
  handleSaveData = () => {},
  handleDelete = () => {},
}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("news"));
    if (getData) {
      setData(getData);
    }
  }, []);

  const handleSave = (item) => {
    const updatedData = data.some((dataItem) => dataItem.id === item.id)
      ? data.filter((dataItem) => dataItem.id !== item.id)
      : [...data, item];

    setData(updatedData);
    localStorage.setItem("news", JSON.stringify(updatedData));
    handleSaveData(item);
    handleDelete(item.id);
  };
  return (
    <div className="flex flex-wrap justify-center items-center inset-0 gap-10 h-full mx-2">
      {result.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col w-72 justify-center items-center gap-4 border rounded-md border-black hover:shadow-md transition-all duration-300"
        >
          <img
            src={
              !item.image || item.image === "None" ? "image.png" : item.image
            }
            alt={item.author}
            className="h-44 w-72 object-cover rounded-t-md"
          />
          <div className="space-y-2 px-2">
            <p className="text-lg font-bold leading-5 h-24">
              {truncateData(item.title, 30)}
            </p>
            <p className="text-sm h-40 overflow-hidden">
              {truncateData(item.description, 50)}
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-2 mb-4">
            <Link
              to={item.url}
              className="px-5 pt-2 pb-[10px] text-center rounded-full bg-zinc-950 hover:bg-zinc-800 text-white transition-all duration-300"
              target="_blank"
            >
              Read More
            </Link>
            <button onClick={() => handleSave(item)}>
              {data.find((data) => data.id === item.id) ? (
                <Bookmark fill="#000000" />
              ) : (
                <Bookmark />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsComponent;
