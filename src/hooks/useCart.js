import { useContext } from "react"
import { appContext } from "../App"

export const useCart = () => {
    const { cartItems, setCartItems } = useContext(appContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    return { cartItems, setCartItems, totalPrice };
};
