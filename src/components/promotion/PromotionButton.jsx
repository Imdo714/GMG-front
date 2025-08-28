import { useNavigate } from "react-router-dom";

const PromotionButton = () => {
    const navigate = useNavigate();

    return(
        <div className="promo-actions">
            <button className="cta ghost" type="button" onClick={() => navigate("/create")}>바로 생성하기</button>
        </div>
    )
}

export default PromotionButton;