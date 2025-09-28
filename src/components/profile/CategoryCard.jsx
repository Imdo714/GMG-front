const CategoryCard = ({ name, count }) => {
  const categoryLabels = {
    RUNNING: "🏃 런닝",
    TRAVEL: "✈️ 여행",
    BEER: "🍺 퇴근후 맥주",
    STUDY: "🍵 스터디",
  };

  return (
    <div className="category-card">
      {categoryLabels[name] || name} <span>{count}</span>
    </div>
  );
}

export default CategoryCard;