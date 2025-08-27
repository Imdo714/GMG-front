const CategoryCard = ({ name, count }) => {
  return (
    <div className="category-card">
      {name} <span>{count}</span>
    </div>
  );
}

export default CategoryCard;