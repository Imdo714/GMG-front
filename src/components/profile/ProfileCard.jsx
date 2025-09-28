const ProfileCard = ({ info }) => {

  if (!info) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="profile-card card" style={{ marginTop: '0px' }} >
      <div className="avatar">
        <img src={ info?.profile } alt="프로필 이미지" />
      </div>
      <div className="info">
        <div className="name">{ info.name }</div>
        <div className="username">{ info.email }</div>

        <div className="actions">
          <button className="change-name-btn">이름 변경</button>
          <button className="change-profile-btn">프로필 변경</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;