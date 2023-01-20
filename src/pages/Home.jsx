import Card from "../components/Card";
import { appContext } from "../App";
import { useContext } from "react";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInpunt,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="content__header">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search__block">
          <img src="/images/search/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="removeBtn"
              src="/images/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInpunt}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="content__container">{renderItems()}</div>
    </div>
  );
}

export default Home;
