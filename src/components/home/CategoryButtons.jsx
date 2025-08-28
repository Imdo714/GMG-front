import React from "react";

const CategoryButtons = ( { selected, setSelected } ) => {

  const categories = [
    { id: "ALL", label: "💩전체 메뉴" },
    { id: "RUNNING", label: "🏃런닝" },
    { id: "BEER", label: "🍺퇴근후 맥주" },
    { id: "STUDY", label: "🍵스터디" },
    { id: "TRAVEL", label: "✈️시작하기" },
  ];

  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-button ${selected === category.id ? "active" : ""}`}
          onClick={() => setSelected(category.id)}
        >
          {category.label} {selected === category.id && "✔️"}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;