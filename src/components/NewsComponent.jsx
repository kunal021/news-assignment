import { Link } from "react-router-dom";
import truncateData from "../utils/wordLimit";
import { useEffect, useState } from "react";

function NewsComponent({ result }) {
  const [saveData, setSaveData] = useState(() => {
    const savedData = localStorage.getItem("savedNews");
    return savedData ? JSON.parse(savedData) : [];
  });

  //   useEffect(() => {
  //     const savedNews = JSON.parse(localStorage.getItem("savedNews"));
  //     if (savedNews) {
  //       setSaveData(savedNews);
  //     }
  //   }, []);

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(saveData));
  }, [saveData]);

  const handleSave = (data) => {
    const isDuplicate = saveData.some((el) => el.id === data.id);
    if (!isDuplicate) {
      setSaveData((prevData) => [...prevData, data]);
    } else {
      return;
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-center inset-0 gap-10 h-full">
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
            <p className="text-sm h-40">{truncateData(item.description, 50)}</p>
          </div>
          <div className="flex justify-between items-center w-full px-2 mb-4">
            <Link
              to={item.url}
              className="px-5 py-2 text-center rounded-full bg-zinc-950 hover:bg-zinc-800 text-white transition-all duration-300"
              target="_blank"
            >
              Read More
            </Link>
            <button
              onClick={() => handleSave(item)}
              className="px-5 py-2 text-center rounded-full bg-zinc-950 hover:bg-zinc-800 text-white transition-all duration-300"
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsComponent;
