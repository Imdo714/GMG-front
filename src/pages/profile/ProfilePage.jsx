import '../../css/ProfilePage.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { myPage } from '../../api/MemberApi';
import ProfileCard from "../../components/profile/ProfileCard";
import StatsCard from "../../components/profile/StatsCard";
import ReviewBox from "../../components/profile/ReviewBox";
import ActivityBox from "../../components/profile/ActivityBox";
import CategoryBox from "../../components/profile/CategoryBox";

const ProfilePage = () => {
  const { memberId } = useParams();
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const getMyPage = async () => {
      try{
        const res = await myPage();
        
        setProfile(res.data.profileInfo);
        setReviews(res.data.reviews);
        setActivity(res.data.activity);
      } catch(error){
        console.log(error);
        if (error.response) {
          const data = error.response.data;
          alert(data.message || data.error);
        }
      }
    }

    getMyPage();
  }, [memberId]);

  return (
    <div className="container">
      <ProfileCard info={profile} />
      <StatsCard reviewCount={reviews?.count} participantCount={activity?.participantCount} />
      <ReviewBox reviews={reviews?.list} />
      <ActivityBox activities={activity?.logList} />
      <CategoryBox stats={activity?.stats} />
    </div>
  );
}

export default ProfilePage;