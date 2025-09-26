import '../../css/ProfilePage.css'
import { useParams } from 'react-router-dom';
import ProfileCard from "../../components/profile/ProfileCard";
import StatsCard from "../../components/profile/StatsCard";
import ReviewBox from "../../components/profile/ReviewBox";
import ActivityBox from "../../components/profile/ActivityBox";
import CategoryBox from "../../components/profile/CategoryBox";

const ProfilePage = () => {
  const { memberId } = useParams();

  return (
    <div className="container">
      <ProfileCard />
      <StatsCard />
      <ReviewBox />
      <ActivityBox />
      <CategoryBox />
    </div>
  );
}

export default ProfilePage;