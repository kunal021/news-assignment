import { useState } from "react";
import News from "./News";
import Pagination from "./Pagination";
import CategoryList from "./CategoryList";

function Home() {
  const [page, setPage] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [category, setCategory] = useState("");

  return (
    <div className="relative w-full h-full flex flex-col gap-10 justify-center items-center">
      <div>
        <CategoryList setCategory={setCategory} category={category} />
      </div>
      <News currPage={currPage} category={category} />
      <div className="mb-5">
        <Pagination
          page={page}
          setPage={setPage}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  );
}

export default Home;
