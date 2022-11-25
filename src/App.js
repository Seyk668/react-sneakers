import React from "react";
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="wrapper">
        <Drawer />
        <Header />

        <div className="content">
            <div className="content__header">
                <h1>Все кроссовки</h1>
                <div className="search__block">
                    <img src="/images/search/search.svg" alt="Search" />
                    <input type="text" placeholder="Поиск..." />
                </div>
            </div>

            <div className="content__container">
                <Card />
                <div className="card">
                    <img width={133} height={112} src="/images/cards/2.jpg" alt="Blazer Mid Suede" className="card__img" />
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
                <div className="card">
                    <img width={133} height={112} src="/images/cards/3.jpg" alt="Blazer Mid Suede" className="card__img" />
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
                <div className="card">
                    <img width={133} height={112} src="/images/cards/4.jpg" alt="Blazer Mid Suede" className="card__img" />
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
            </div>
        </div>
    </div>
  );
}

export default App;
