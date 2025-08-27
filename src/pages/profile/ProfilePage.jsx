import './ProfilePage.css'
import ProfileCard from "../../components/profile/ProfileCard";
import StatsCard from "../../components/profile/StatsCard";
import ReviewBox from "../../components/profile/ReviewBox";
import ActivityBox from "../../components/profile/ActivityBox";
import CategoryBox from "../../components/profile/CategoryBox";

const ProfilePage = () => {
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