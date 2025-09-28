import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './useContext/AuthContext';
import ProtectedRoute from './route/ProtectedRoute';
import HomePage from "./pages/homePage/HomePage"
import MatchDetail from './pages/matchDetail/MatchDetail';
import AppBanner from './components/fix/AppBanner';
import BottomNav from './components/fix/BottomNav';
import ProfilePage from './pages/profile/ProfilePage';
import ReviewList from './pages/review/ReviewList';
import ReviewDetail from './pages/review/ReviewDetail';
import CreateMeetingPage from './pages/createMetting/CreateMeetingPage ';
import Login from './pages/login/Login';
import SingUp from './pages/singUp/SingUp';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <AppBanner />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreateMeetingPage />} />
              <Route path="/match/:meetingId" element={<MatchDetail />} />
              <Route path="/mypage/:memberId" element={<ProfilePage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/review" element={<ReviewList />} />
                <Route path="/review/:meetingId" element={<ReviewDetail />} />
              </Route>
              

              <Route path="/login" element={<Login />} />
              <Route path="/singUp" element={<SingUp />} />
            </Routes>
          </main>

          <BottomNav />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
