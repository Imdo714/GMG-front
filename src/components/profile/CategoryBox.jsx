import CategoryCard from "./CategoryCard";

const CategoryBox = () => {
  const categories = [
    { name: "⚽ 축구", count: 6 },
    { name: "🏀 농구", count: 3 },
    { name: "🏸 배드민턴", count: 2 },
    { name: "🥏 프리스비", count: 1 }
  ];

  return (
    <div className="category-box card">
      <h3>카테고리별 활동</h3>
      <div className="categories">
        {categories.map((c, i) => (
          <CategoryCard key={i} name={c.name} count={c.count} />
        ))}
      </div>
    </div>
  );
}

export default CategoryBox;