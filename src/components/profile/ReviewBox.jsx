import ReviewItem from "./ReviewItem";

const ReviewBox = () => {
  const reviews = [
    "👍 정말 도움이 되는 글이었어요!",
    "✍ 설명이 자세해서 이해하기 쉬웠습니다.",
    "💡 새로운 아이디어를 얻었네요.",
    "👏 유익한 정보 감사합니다!"
  ];

    return (
        <div className="review-box card">
            <h3>다른 사람의 리뷰</h3>
            <ul className="review-list">
                {reviews.map((r, i) => (
                <ReviewItem key={i} text={r} />
                ))}
            </ul>
        </div>
    );
}

export default ReviewBox;