import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CategoryList({ setCategory, category }) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const handleCategoryOpen = () => {
    setCategoryOpen((prev) => !prev);
  };

  const handleSetCategory = (value) => {
    setCategory(value);
  };

  const categoryData = [
    {
      id: 0,
      name: "None",
      value: "",
    },
    {
      id: 1,
      name: "Business",
      value: "business",
    },
    {
      id: 2,
      name: "Entertainment",
      value: "entertainment",
    },
    {
      id: 3,
      name: "Health",
      value: "health",
    },
    {
      id: 4,
      name: "Science",
      value: "science",
    },
    {
      id: 5,
      name: "Sports",
      value: "sports",
    },
    {
      id: 6,
      name: "Technology",
      value: "technology",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center bg-gray-50 p-2 rounded-md border border-gray-300">
      <div
        onClick={handleCategoryOpen}
        className="flex justify-between items-center gap-2 w-32 cursor-pointer"
      >
        <p className="pb-[2px] text-center">
          {category ? capitalizeFirstLetter(category) : "Category"}
        </p>
        {categoryOpen ? (
          <ChevronDown className="pt-[3px]" />
        ) : (
          <ChevronRight className="pt-[3px]" />
        )}
      </div>
      {categoryOpen && (
        <div className="absolute top-full z-50 mt-2 w-36 flex flex-col items-start gap-2 bg-gray-50 p-2 rounded-md border border-gray-300">
          {categoryData.map((item) => (
            <p
              key={item.id}
              onClick={() => handleSetCategory(item.value)}
              className="cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryList;
