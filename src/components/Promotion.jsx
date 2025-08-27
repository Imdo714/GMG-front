import "../css/Promotion.css"

const Promotion = ({title, desc}) => {
    return(
        <div class="promo-banner">
            <div class="promo-icon">📝</div>

            <div class="promo-content">
                <p class="promo-title">{title}</p>
                <p class="promo-desc">{desc}</p>
            </div>

            <div class="promo-actions">
                <button class="cta" type="button">바로 생성하기</button>
                <button class="cta ghost" type="button">나중에</button>
                <button class="close" type="button" aria-label="배너 닫기">×</button>
            </div>
        </div>
    )
}

export default Promotion;