import MatchHeader from "../../components/matchDetail/MatchHeader";
import MatchDescription from "../../components/matchDetail/MatchDescription";
import ApplicantsReview from "../../components/review/ApplicantsReview";
import soccerField from "../../assets/react.svg";
import Promotion from "../../components/promotion/Promotion";


const ReviewDetail = () => {
    // 모임이 끝난 모임정보를 보여주고 카드를 눌러 그 사람의 후기를 남겨주는 페이지

    return (
        <div className="container">

            <img src={soccerField} alt="축구장" className="top-image" />

            <div className="content">
                <MatchHeader
                date="8월 26일 화요일 11:00"
                title="서울 영등포 EA SPORTS FC(더에프필드) B구장"
                location="서울특별시 영등포구 선유로 138"
                views={230}
                likes={0}
                />

                <MatchDescription
                open={false}
                description={`매치 시작 10분 전 신청이 마감됩니다.\n무더위엔 내 몸 상태를 세심하게 살피고 즐겁게 뛰어요!`}
                />

                {/* promotion 영역 */}
                <div className="promo-banner">
                    <Promotion 
                    title={"이번 만남은 어땠나요? 후기를 남겨주세요!"}
                    desc={"카드를 누르면 후기를 작성할수 있습니다!"}
                    />
                </div>

                {/* 리뷰 작성 영역 */}
                <ApplicantsReview />

            </div>

        </div>
    )
}

export default ReviewDetail;