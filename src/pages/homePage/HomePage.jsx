import { useState } from "react";
import './HomePage.css'
import Header from "../../components/Header";
import MainBanner from "../../components/home/MainBanner";
import MatchItem from "../../components/home/MatchItem";

const HomePage = () => {
    const [matches, setMatches] = useState([
        { id: 1, time: "19:00", title: "서울 뚝섬 런닝할 사람", subtitle: "모집 인원 5 / 10" },
        { id: 2, time: "20:30", title: "잠실 풋살 경기", subtitle: "모집 인원 5 / 5" },
        { id: 3, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 4, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 5, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 6, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 7, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 8, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 9, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 11, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 12, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 13, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 14, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 15, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
        { id: 16, time: "21:00", title: "한강 밤산책 모임", subtitle: "모집 인원 3 / 8" },
]);
    
    return (
        <div className="container">
            <Header />
            <MainBanner />

            <div className="match-list">
                {matches.map((match) => (
                <MatchItem
                    key={match.id} 
                    time={match.time}
                    title={match.title}
                    subtitle={match.subtitle}
                />
                ))}
            </div>
        </div>
    );
}

export default HomePage;