const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container"></div>
        <p className="header__logo">Logo</p>
        <div className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <a href="">About us</a>
            </li>
            <li className="header__item">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
