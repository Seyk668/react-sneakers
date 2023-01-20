import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import { appContext } from "../../App";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(appContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const itemObj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(itemObj);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="577" cy="532" r="15" />
          <rect x="501" y="530" rx="2" ry="2" width="140" height="10" />
          <rect x="471" y="524" rx="2" ry="2" width="140" height="10" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="130" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="160" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="157" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "/images/liked.svg" : "images/unliked.svg"}
              alt="unliked"
            />
          </div>
          <img
            width={133}
            height={112}
            src={imageUrl}
            alt="Blazer Mid Suede"
            className="card__img"
          />
          <p className={styles.cardText}>{title}</p>
          <div className={styles.cardBottom}>
            <div className={styles.cardPrice}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id)
                    ? "/images/btn-cheked.svg"
                    : "/images/btn-add.svg"
                }
                alt="add"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
