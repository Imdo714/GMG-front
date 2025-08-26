import MenuButtons from "../MenuButtons";
import soccerField from "../../assets/react.svg";

const MainBanner = () => {
  return (
    <div className="main-banner">
         <img src="https://d31wz4d3hgve8q.cloudfront.net/media/banner-manner_pc.png" alt="메인 배너" />
      <MenuButtons />
    </div>
  );
}

export default MainBanner;