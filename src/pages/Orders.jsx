import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useContext } from "react";
import { appContext } from "../App";

function Orders() {
  const { onAddToFavorite, onAddToCart } = useContext(appContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
      const { data } = await axios.get(
        "https://638a1446c5356b25a2118523.mockapi.io/orders"
      );
      /* console.log(data.map(obj => obj.items).flat()); */
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchOrders();
  }, []);

  return (
    <div className="content">
      <div className="content__header">
        <h1>Мои заказы</h1>
      </div>

      <div className="content__container">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
