import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { meetingList } from "../../api/Meeting";
import MatchItem from "./MatchItem";

const MatchList = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 9;

  const observer = useRef();

  // 1. 카테고리가 변경되면 상태를 '초기화'만 하는 useEffect
  useEffect(() => {
    setMatches([]);
    setHasMore(true);
  }, [selectedCategory]);

  // 2. 데이터를 실제로 가져오는 함수 (useCallback으로 최적화)
  const getMeetingList = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);

    // 현재 matches 배열을 기준으로 마지막 항목 정보 설정
    const lastMatch = matches.length > 0 ? matches[matches.length - 1] : null;
    const params = {
      size: pageSize,
      lastMeetingDate: lastMatch?.date,
      lastMeetingTime: lastMatch?.time,
      lastMeetingId: lastMatch?.meetingId,
      category: selectedCategory !== "ALL" ? selectedCategory : undefined,
    };

    try {
      const response = await meetingList(params); // 실제 API 호출
      console.log("Fetching with params:", params);

      const newMatches = response.data?.list || [];
      const hasNext = response.data?.hasNext ?? false;

      setMatches(prev => {
        const combined = [...prev, ...newMatches];
        return Array.from(new Map(combined.map(item => [item.meetingId, item])).values());
      });
      setHasMore(hasNext);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, matches, selectedCategory]); 

  // 3. '초기화된 상태'를 감지하여 첫 데이터 로딩을 실행하는 useEffect
  useEffect(() => {
    if (matches.length === 0 && hasMore) {
      getMeetingList();
    }
  }, [matches, hasMore, getMeetingList]);

  // 무한 스크롤을 위한 Intersection Observer 설정
  const lastMatchElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        getMeetingList(); 
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore, getMeetingList]);

  return (
    <div className="match-list">
      {matches.map((match, index) => {
        const itemProps = {
          id: match.meetingId,
          title: match.title,
          time: `${match.date}T${match.time}`,
          personCount: match.personCount,
          acceptedCount: match.acceptedCount,
          views: match.seeCount,
          onClick: () => navigate(`/match/${match.meetingId}`)
        };

        // 마지막 요소에 ref 부착
        if (matches.length === index + 1) {
          return <MatchItem key={match.meetingId} ref={lastMatchElementRef} {...itemProps} />;
        }
        return <MatchItem key={match.meetingId} {...itemProps} />;
      })}
      {loading && <p>Loading...</p>}
      {!hasMore && matches.length > 0 && <p>더 이상 모임이 없습니다.</p>}
    </div>
  );
};

export default MatchList;
