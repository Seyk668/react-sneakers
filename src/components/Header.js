import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../hooks/useCart";


function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header>
            <Link to="/">
                <div className="header__left">
                    <img width={40} height={40} src="/images/logo.svg" alt="logo" />
                    <div className="header__text">
                        <h3>react sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="header__right">
                <li onClick={props.onClickCart} className="header__item">
                    <img width={18} height={18} src="/images/cart.svg" alt="Корзина" />
                    <span className="header__sum">{totalPrice} руб.</span>
                </li>
                <li className="header__item">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/images/heart.svg" alt="Закладки" />
                    </Link>
                </li>

                <li className="header__item">
                    <Link to="/orders">
                        <img width={18} height={18} src="/images/user.svg" alt="Пользователь" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;