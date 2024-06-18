function Pagination({ page, setPage, currPage, setCurrPage }) {
  const nums = [
    { num: page },
    { num: page + 1 },
    { num: page + 2 },
    { num: page + 3 },
    { num: page + 4 },
  ];
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    // setCurrPage((prevCurrPage) => prevCurrPage + 1);
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      // setCurrPage((prevCurrPage) => prevCurrPage - 1);
    }
  };
  return (
    <div>
      <div className="flex bg-white rounded-lg">
        <button
          onClick={handlePrev}
          className="h-10 sm:h-12 border-2 border-r-0 border-black
               px-4 rounded-l-lg hover:bg-black hover:text-white"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        {nums.map((item, idx) => (
          <button
            onClick={() => setCurrPage(item.num)}
            key={idx}
            className={`h-10 sm:h-12 border-2 border-r-0 border-black
               w-10 sm:w-12 ${currPage === item.num && "bg-black text-white"}`}
          >
            {item.num}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="h-10 sm:h-12 border-2  border-black
               px-4 rounded-r-lg hover:bg-black hover:text-white"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
