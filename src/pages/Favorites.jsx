import { useContext } from "react";
import Card from "../components/Card";
import { appContext } from "../App";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(appContext);

  return (
    <div className="content">
      <div className="content__header">
        <h1>Мои закладки</h1>
      </div>

      <div className="content__container">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
