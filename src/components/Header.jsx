function Header() {
    return (
        <header>
            <div className="header__left">
                <img width={40} height={40} src="/images/logo.svg" alt="logo" />
                <div className="header__text">
                    <h3>react sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header__right">
                <li className="header__item">
                <img width={18} height={18} src="/images/cart.svg" alt="cart" />
                    <span className="header__sum">1205 руб.</span>
                </li>
                <li className="header__item">
                <img width={18} height={18} src="/images/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    );
}

export default Header;