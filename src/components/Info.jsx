import React from 'react'
import { useContext } from 'react';
import { appContext } from '../App';

const Info = ({ title, image, description }) => {
    const { setCartOpened } = useContext(appContext);

  return (
    <div className="cartEmpty">
        <img width={120} height={120} src={image} alt="Box" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => setCartOpened(false)} className="greenBtn">
            <img src="/images/arrow-left.svg" alt="Arrow" />Вернуться назад
        </button>
    </div>
  )
}

export default Info;
