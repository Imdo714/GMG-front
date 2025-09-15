import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { meetingList } from "../../api/Meeting";
import MatchItem from "./MatchItem";

const MatchList = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 10;

  const observer = useRef();

  // 데이터 가져오기
  const getMeetingList = async () => {
  if (loading || !hasMore) return;
  setLoading(true);

  const lastMatch = matches[matches.length - 1];
  const params = {
    size: pageSize,
    lastMeetingDate: lastMatch?.date,
    lastMeetingTime: lastMatch?.time,
    category: selectedCategory,
  };

  try { // 카테고리 부분 호출 해야 함
    const response = await meetingList(params);
    const newMatches = response.data?.list || [];
    const hasNext = response.data?.hasNext ?? false;

    setMatches(prev => {
      const combined = [...prev, ...newMatches];
      // meetingId 기준 중복 제거
      return Array.from(new Map(combined.map(item => [item.meetingId, item])).values());
    });

    setHasMore(hasNext);
    console.log(response);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    getMeetingList();
  }, []);


  const lastMatchElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        getMeetingList();
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);


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
        if (index === matches.length - 1) {
          return <MatchItem key={match.meetingId} ref={lastMatchElementRef} {...itemProps} />;
        }

        return <MatchItem key={match.meetingId} {...itemProps} />;
      })}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more meetings</p>}
    </div>
  );
};

export default MatchList;
