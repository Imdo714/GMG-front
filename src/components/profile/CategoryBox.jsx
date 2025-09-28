import CategoryCard from "./CategoryCard";

const CategoryBox = ({ stats }) => {

  return (
    <div className="category-box card">
      <h3>카테고리별 활동</h3>
      <div className="categories">
        {Object.entries(stats || {}).map(([name, count]) => (
          <CategoryCard key={name} name={name} count={count} />
        ))}
      </div>
    </div>
  );
}

export default CategoryBox;