function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/images/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/images/cards/1.jpg" alt="Blazer Mid Suede" className="card__img" />
            <p className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__bottom">
                <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="add" />
                </button>
            </div>
        </div>
    );
}

export default Card;