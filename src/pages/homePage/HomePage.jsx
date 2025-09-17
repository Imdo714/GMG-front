import { useState } from "react";
import '../../css/HomePage.css'
import Header from "../../components/home/Header";
import MainBanner from "../../components/home/MainBanner";
import MatchList from "../../components/home/MatchList";
import MatchItem from "../../components/home/MatchItem";
import Promotion from "../../components/promotion/Promotion";
import PromotionButton from "../../components/promotion/PromotionButton";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    
    return (
        <div className="container">
            <Header />
            <MainBanner selected={selectedCategory} setSelected={setSelectedCategory} />

            <div className="promo-banner">
                <Promotion 
                title={"혼자 하기 싫죠?, 모임을 생성해볼까요?"}
                desc={"스쳐가는 인연이 생길수도 있습니다. 지금 바로 인연을 만들어봐요"}
                />
                <PromotionButton />
            </div>

            <MatchList selectedCategory={selectedCategory} />
        </div>
    );
}

export default HomePage;