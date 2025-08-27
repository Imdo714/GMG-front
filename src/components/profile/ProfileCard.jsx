const ProfileCard = () => {
  return (
    <div className="profile-card card" style={{ marginTop: '0px' }} >
      <div className="avatar">
        <img src="https://i.pravatar.cc/80?img=1" alt="프로필 이미지" />
      </div>
      <div className="info">
        <div className="name">임도현</div>
        <div className="username">@imdo714</div>

        <div className="actions">
          <button className="change-name-btn">이름 변경</button>
          <button className="change-profile-btn">프로필 변경</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;