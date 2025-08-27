import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage"
import MatchDetail from './pages/matchDetail/MatchDetail';
import AppBanner from './components/AppBanner';
import BottomNav from './components/BottomNav';
import ProfilePage from './pages/profile/ProfilePage';

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* 항상 위에 보이는 헤더 */}
        <AppBanner />

        {/* 페이지 영역 */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/match-detail" element={<MatchDetail />} />
            <Route path="/mypage" element={<ProfilePage />} />
          </Routes>
        </main>

        {/* 항상 아래 보이는 네비 */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App
