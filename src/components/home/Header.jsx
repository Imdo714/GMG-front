import Logo from "../../assets/gmgLogo.png"

const Header = () => {
  return (
    <div className="header">
        {/* <div className="logo">GMG</div> */}
      <div className="logo">
        <img src={Logo} alt="GMG Logo" style={{ height: "40px" }} />
      </div>

        <div className="right-group">
            <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요..."
            />
            
            <div className="icons">🔍</div>
        </div>
    </div>

  );
}

export default Header;