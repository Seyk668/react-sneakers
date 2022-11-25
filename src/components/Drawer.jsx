function Drawer() {
    return (
    <div style={{display:'none'}} className="overlay">
        <div className="drawer">
                <h2>
                    Корзина
                    <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    <div className="cartItem">
                        <img width={70} height={70} src="/images/cards/1.jpg" alt="Sneakers" />
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem">
                        <img width={70} height={70} src="/images/cards/2.jpg" alt="Sneakers" />
                        <div>
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove" />
                    </div>
                </div>

            <div className="total">
            <ul>
                <li className="total__price">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                </li>
                <li className="total__price">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                </li>
            </ul>
            <button className="greenBtn">Оформить заказ<img src="/images/arrow.svg" alt="arrow" /></button>
            </div>
        </div>
    </div>
    );
}

export default Drawer;