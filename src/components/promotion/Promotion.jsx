import "../../css/Promotion.css"

const Promotion = ({title, desc}) => {
    return(
        <>
            <div className="promo-icon">📝</div>

            <div className="promo-content">
                <p className="promo-title">{title}</p>
                <p className="promo-desc">{desc}</p>
            </div>
        </>
    )
}

export default Promotion;