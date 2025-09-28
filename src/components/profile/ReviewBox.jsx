import ReviewItem from "./ReviewItem";

const ReviewBox = ({ reviews }) => {

  if (!reviews) {
    return <div>로딩중...</div>;
  }

  return (
      <div className="review-box card">
          <h3>다른 사람의 리뷰</h3>
          <ul className="review-list">
            {reviews.map(r => (
              <ReviewItem key={r.reviewId} text={r.comment} />
            ))}
          </ul>
      </div>
  );
}

export default ReviewBox;