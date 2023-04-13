import "./topBar.css";

function TopBar() {
  return (
    <div className="topBar">
      <img
        src={require("../../artCenterLogo.jpg")}
        alt="img not found"
        className="topBarLogo"
      />
      <ul className="topBarMenuContainer">
        <li className="topBarMenu">Home</li>
        <li className="topBarMenu">About</li>
        <li className="topBarMenu">Exibition</li>
        <li className="topBarMenu">Academy</li>
      </ul>
    </div>
  );
}

export default TopBar;
